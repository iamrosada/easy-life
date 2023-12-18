//@ts-ignore
//@ts-nocheck
import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import Peer, { MediaConnection } from 'peerjs';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your signaling server

const VideoChatRoom: React.FC = () => {
  const [peerId, setPeerId] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [receivedMessage, setReceivedMessage] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);
  const [videoStreams, setVideoStreams] = useState<MediaStream[]>([]);

  const peerRef = useRef<Peer | null>(null);
  const mediaConnectionsRef = useRef<{
    [participantId: string]: MediaConnection;
  }>({});

  useEffect(() => {
    const peer = new Peer();

    peer.on('open', id => {
      setPeerId(id);
    });

    peer.on('connection', conn => {
      conn.on('data', data => {
        return setReceivedMessage(data as any);
      });
    });

    peer.on('call', call => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(stream => {
          call.answer(stream);
          call.on('stream', remoteStream => {
            setVideoStreams(prevStreams => [...prevStreams, remoteStream]);
          });
        });
    });

    peerRef.current = peer;

    socket.on('participant-joined', (participantId: string) => {
      setParticipants(prevParticipants => [...prevParticipants, participantId]);
    });

    socket.on('participant-left', (participantId: string) => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participantId)
      );

      if (mediaConnectionsRef.current[participantId]) {
        mediaConnectionsRef.current[participantId].close();
        delete mediaConnectionsRef.current[participantId];
      }
    });

    return () => {
      if (peerRef.current) {
        peerRef.current.destroy();
      }
    };
  }, []);

  const connectToRoom = () => {
    // Clear previous video calls
    setVideoStreams([]);

    // Connect to the room
    socket.emit('join-room', { roomId, participantId: peerId });

    // When a participant joins the room
    socket.on('room-participants', (participantsList: string[]) => {
      setParticipants(participantsList.filter(p => p !== peerId));

      // Establish media connections with new participants
      participantsList
        .filter(p => p !== peerId && !mediaConnectionsRef.current[p])
        .forEach(newParticipant => {
          const mediaConnection = peerRef.current?.call(
            newParticipant,
            //@ts-ignore
            undefined,
            {
              video: true,
              audio: true,
            }
          );

          if (mediaConnection) {
            mediaConnection.on('stream', remoteStream => {
              setVideoStreams(prevStreams => [...prevStreams, remoteStream]);
            });

            mediaConnectionsRef.current[newParticipant] = mediaConnection;
          }
        });
    });
  };

  const connectToPeer = (participantId: string) => {
    if (peerRef.current) {
      const conn = peerRef.current.connect(participantId);
      conn.on('open', () => {
        conn.send(message);
      });
    }
  };

  return (
    <div>
      <p>Your Peer ID: {peerId}</p>
      <input
        type="text"
        placeholder="Enter room ID"
        value={roomId}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setRoomId(e.target.value)
        }
      />
      <br />
      <button onClick={connectToRoom}>Connect to Room</button>
      <br />
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
      />
      <br />
      <button onClick={() => participants.forEach(p => connectToPeer(p))}>
        Send to All Participants
      </button>
      <p>Received Message: {receivedMessage}</p>
      <p>Participants in Room:</p>
      <ul>
        {participants.map(participant => (
          <li key={participant}>{participant}</li>
        ))}
      </ul>
      <p>Video Streams:</p>
      {videoStreams.map((stream, index) => (
        <video
          key={index}
          autoPlay
          playsInline
          //@ts-ignore
          srcObject={stream}
        ></video>
      ))}
    </div>
  );
};

export default VideoChatRoom;

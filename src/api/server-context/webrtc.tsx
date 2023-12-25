import React, { useEffect, useRef, useState } from 'react';
import { VideoService, pc } from './video-client';
import './styles.css';

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

export const WebRTCComponent = () => {
  const [localStream, setLocalStream] = useState(new MediaStream());
  const [remoteStream, setRemoteStream] = useState(new MediaStream());
  const pc = useRef(new RTCPeerConnection(servers));
  const callInput = useRef(null);

  const webcamButtonHandler = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setLocalStream(stream);

      stream.getTracks().forEach(track => {
        pc.current.addTrack(track, stream);
      });

      pc.current.ontrack = event => {
        setRemoteStream(prevStream => {
          const newStream = new MediaStream();
          event.streams[0].getTracks().forEach(track => {
            newStream.addTrack(track);
          });
          return newStream;
        });
      };

      // Display local stream
      const webcamVideo = document.getElementById(
        'webcamVideo'
      ) as HTMLVideoElement;
      if (webcamVideo) {
        webcamVideo.srcObject = stream;
      }

      // Enable/disable buttons
      callButtonRef.current.disabled = false;
      answerButtonRef.current.disabled = false;
      webcamButtonRef.current.disabled = true;
    } catch (error) {
      console.error('Error accessing webcam:', error.message);
    }
  };

  const callButtonHandler = async () => {
    try {
      // Your existing callButtonHandler logic
      const callId = callInputRef.current?.value;

      // Update the backendURL with the current callId
      const currentBackendURL = `${BASE_URL}calls/${callId}`;

      // Your existing logic to create a call
      await VideoService.createCall(callId);

      // Update pc.current.ontrack to handle remote tracks
      pc.current.ontrack = event => {
        setRemoteStream(prevStream => {
          const newStream = new MediaStream();
          event.streams[0].getTracks().forEach(track => {
            newStream.addTrack(track);
          });
          return newStream;
        });
      };

      // Display remote stream
      const remoteVideo = document.getElementById(
        'remoteVideo'
      ) as HTMLVideoElement;
      if (remoteVideo) {
        remoteVideo.srcObject = remoteStream;
      }
      // const hangupButtonRef = document.getElementById(
      //   'hangup'
      // ) as HTMLButtonElement;
      // // Enable/disable buttons
      // hangupButtonRef.current.disabled = false;
    } catch (error: any) {
      console.error('Error creating call:', error.message);
    }
  };

  const answerButtonHandler = async () => {
    try {
      // Your existing answerButtonHandler logic
      const callId = callInputRef.current?.value;

      // Update the backendURL with the current callId
      const currentBackendURL = `${BASE_URL}calls/${callId}`;

      // Your existing logic to answer a call
      await VideoService.getAnswerCandidates();

      // Enable/disable buttons
      hangupButtonRef.current.disabled = false;
    } catch (error) {
      console.error('Error answering call:', error.message);
    }
  };

  const hangupButtonHandler = () => {
    // Your existing hangupButtonHandler logic
    // Reset streams and disable/enable buttons as needed
    setLocalStream(null);
    setRemoteStream(new MediaStream());

    pc.current.close();

    // Enable/disable buttons
    callButtonRef.current.disabled = false;
    answerButtonRef.current.disabled = false;
    webcamButtonRef.current.disabled = false;
    hangupButtonRef.current.disabled = true;
  };

  return (
    <div>
      <h2>1. Start your Webcam</h2>
      <div className="videos">
        <span>
          <h3>Local Stream</h3>
          <video
            id="webcamVideo"
            autoPlay
            playsInline
            ref={video => setLocalStream(video?.srcObject as MediaStream)}
          ></video>
        </span>
        <span>
          <h3>Remote Stream</h3>
          <video
            id="remoteVideo"
            autoPlay
            playsInline
            ref={video => setRemoteStream(video?.srcObject as MediaStream)}
          ></video>
        </span>
      </div>

      <button onClick={webcamButtonHandler}>Start webcam</button>

      <h2>2. Create a new Call</h2>
      <button
        onClick={callButtonHandler}
        // disabled={/* add disabled condition */}
      >
        Create Call (offer)
      </button>

      <h2>3. Join a Call</h2>
      <p>Answer the call from a different browser window or device</p>
      <input ref={callInputRef} />
      <button
        onClick={answerButtonHandler}
        // disabled={/* add disabled condition */}
      >
        Answer
      </button>

      <h2>4. Hangup</h2>
      <button
        id="hangup"
        onClick={hangupButtonHandler}
        // disabled={/* add disabled condition */}
      >
        Hangup
      </button>
    </div>
  );
};

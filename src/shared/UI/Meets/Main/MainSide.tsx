import React, { useEffect, useState, useRef } from 'react';

const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError(
        err instanceof DOMException ? err.message : 'Erro ao acessar a câmera.'
      );
    }
  };

  // ComponentDidMount
  useEffect(() => {
    startCamera();
    // ComponentWillUnmount
    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject as MediaStream | null;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => {
            track.stop();
          });
        }
      }
    };
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <video
        // style={{
        //   width: '100%',
        //   height: '100%',
        //   // objectFit: 'cover',
        //   // objectFit: 'contain',

        //   // transform: 'scaleX(-1)',
        // }}
        ref={videoRef}
        autoPlay
        playsInline
        className="h-[300px] max-w-full rounded-xl overflow-hidden flipVideo object-cover"
      />
    </div>
  );
};

export default CameraComponent;

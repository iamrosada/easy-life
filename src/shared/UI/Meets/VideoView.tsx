// import React, { useState, useRef, useLayoutEffect } from 'react';
// import './index.css';

// export const VideoView = ({ videoPermission }) => {
//   // refs
//   const mainDiv = useRef();

//   // state
//   const [divHeight, setDivHeight] = useState(0);

//   // lifecycle
//   useLayoutEffect(() => {
//     if (mainDiv.current) {
//       setDivHeight(mainDiv.current.offsetWidth / 2);
//     }
//     return () => {};
//   }, []);

//   // views
//   return (
//     <div
//       ref={mainDiv}
//       style={{ height: divHeight }}
//       className="relative flex w-full h-auto bg-gray-300 dark:bg-appColor-appLight rounded-xl justify-center items-center"
//     >
//       {videoPermission && (
//         <video className="h-auto max-w-full rounded-xl overflow-hidden flipVideo object-cover" />
//       )}
//       {!videoPermission && (
//         <div className="w-full h-full flex items-center justify-center">
//           Vídeo desativado
//         </div>
//       )}
//     </div>
//   );
// };

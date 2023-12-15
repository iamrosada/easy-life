// import { GridItem } from '@chakra-ui/react';
// import { Grid } from '@mui/material';
// import React, { useState, useRef, useLayoutEffect } from 'react';

// const Container = ()=>{
//   return (
//     <Grid
//   templateAreas={`"header header"
//                   "nav main"
//                   "nav footer"`}
//   gridTemplateRows={'50px 1fr 30px'}
//   gridTemplateColumns={'150px 1fr'}
//   h='200px'
//   gap='1'
//   color='blackAlpha.700'
//   fontWeight='bold'
// >
//   <GridItem pl='2' bg='orange.300' area={'header'}>
//     Header
//   </GridItem>
//   <GridItem pl='2' bg='pink.300' area={'nav'}>
//     Nav
//   </GridItem>
//   <GridItem pl='2' bg='green.300' area={'main'}>
//     Main
//   </GridItem>
//   <GridItem pl='2' bg='blue.300' area={'footer'}>
//     Footer
//   </GridItem>
// </Grid>
//   )
// }
// function Footer() {
//   const [isMessagesOpen, setisMessagesOpen] = useState(false);
//   const [audioPermission, setAudioPermission] = useState(true);
//   const [videoPermission, setVideoPermission] = useState(true);

//   const toggleVideo = () => {
//     setVideoPermission(prevVideoPermission => !prevVideoPermission);
//   };

//   const toggleAudio = () => {
//     setAudioPermission(prevAudioPermission => !prevAudioPermission);
//   };

//   return (
//     <div className="grid grid-cols-6 grid-rows-3 h-screen">
//       <div className="col-span-4 grid grid-rows-2">
//         <div className="row-span-1 col-span-4 bg-gray-300 p-4">Host Screen</div>
//         <div className="row-span-1 col-span-4 bg-gray-700 p-4 flex flex-wrap">
//           {/* Lista de participantes abaixo do Host Screen (substitua isso com seus componentes de participantes) */}
//           <div className="bg-gray-200 text-black p-2 m-2">Participant 1</div>
//           <div className="bg-gray-200 text-black p-2 m-2">Participant 2</div>
//           <div className="bg-gray-200 text-black p-2 m-2">Participant 3</div>
//           <div className="bg-gray-200 text-black p-2 m-2">Participant 4</div>
//         </div>
//       </div>
//       <div className="col-span-2 bg-gray-800 text-white p-4 row-span-3">
//         {/* Conteúdo da barra lateral (substitua isso com seu conteúdo real) */}
//         <div className="flex flex-col h-full justify-between">
//           <div className="bg-gray-700 text-white p-2 mb-2">
//             Host (em stream)
//           </div>
//           <div className="bg-gray-700 text-white p-2 mb-2">Sidebar Item 1</div>
//           <div className="bg-gray-700 text-white p-2 mb-2">Sidebar Item 2</div>
//           {/* Include the Footer component with camera and audio icons */}
//           <FooterMeeting
//             isMessagesOpen={isMessagesOpen}
//             toggleMessages={() => {
//               setisMessagesOpen(!isMessagesOpen);
//             }}
//             audioPermission={audioPermission}
//             videoPermission={videoPermission}
//             toggleVideo={toggleVideo}
//             toggleAudio={toggleAudio}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// interface FooterMeetingProps {
//   isMessagesOpen: boolean;
//   toggleMessages: () => void;
//   audioPermission: boolean;
//   videoPermission: boolean;
//   toggleVideo: () => void;
//   toggleAudio: () => void;
// }
// const FooterMeeting: React.FC<FooterMeetingProps> = ({
//   isMessagesOpen,
//   toggleMessages,
//   audioPermission,
//   videoPermission, // Corrected typo
//   toggleVideo,
//   toggleAudio,
// }) => {
//   return (
//     <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
//       <div>
//         {/* Button to toggle messages */}
//         <button className="mr-4" onClick={toggleMessages}>
//           {isMessagesOpen ? 'Close Messages' : 'Open Messages'}
//         </button>

//         {/* Button to toggle audio */}
//         <button className="mr-4" onClick={toggleAudio}>
//           {audioPermission ? 'Mute' : 'Unmute'}
//         </button>

//         {/* Button to toggle video */}
//         <button onClick={toggleVideo}>
//           {videoPermission ? 'Turn Off Video' : 'Turn On Video'}{' '}
//           {/* Corrected condition */}
//         </button>
//       </div>

//       {/* Add any additional components or information you want in the footer */}
//     </div>
//   );
// };

// interface MessagesSidebarProps {
//   isMessagesOpen: boolean;
//   closeMessages: () => void;
// }

// const MessagesSidebar: React.FC<MessagesSidebarProps> = ({
//   isMessagesOpen,
//   closeMessages,
// }) => {
//   return (
//     <div className={`sidebar ${isMessagesOpen ? 'open' : 'closed'}`}>
//       <div className="sidebar-header">
//         <h2>Messages</h2>
//         <button onClick={closeMessages}>Close</button>
//       </div>
//       <div className="messages-content">
//         {/* Add your messages content or components here */}
//         <p>Message 1</p>
//         <p>Message 2</p>
//         {/* ... */}
//       </div>
//     </div>
//   );
// };

// interface VideoViewProps {
//   videoPermission: boolean;
// }

// const VideoView: React.FC<VideoViewProps> = ({ videoPermission }) => {
//   // refs
//   const mainDiv = useRef<HTMLDivElement>(null);

//   // state
//   const [divHeight, setDivHeight] = useState<number>(0);

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

// export default Footer;

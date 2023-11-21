import { Box } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

// const Background: React.FC<Props> = ({ children }) => {
//   return (
//     <Box bg="#F5F5F5	" w="100vw" minHeight="100vh">
//       {children}
//     </Box>
//   );
// };

// export default Background;

const Background: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F5',
        minHeight: '100vh',
        width: '100vw',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: '20px', // Adjust the padding according to your needs
      }}
    >
      {children}
    </Box>
  );
};

export default Background;

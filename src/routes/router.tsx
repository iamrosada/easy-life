import Missing from '@/pages/404';
import HomeComponent from '@/pages/Home/home';
import Background from '@/shared/UI/Background/Background';
import SigningComponent from '@/shared/UI/Signin/Signin';
import theme from '@/styles/global-style';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomeComponent />} />
        <Route
          index
          path="/create-account"
          element={
            <Background>
              <ChakraProvider theme={theme}>
                <SigningComponent />
              </ChakraProvider>
            </Background>
          }
        />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

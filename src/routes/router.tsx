import Missing from '@/pages/404';
// import HomeComponent from '@/pages/Home/home';
import Background from '@/shared/UI/Background/Background';
import { CreateAccountComponent } from '@/shared/UI/CreateAccount/CreateAccount';
import Dashboard from '@/shared/UI/Dashboard';
import { Container } from '@/shared/UI/Meets/FooterMeeting';
import SigningComponent from '@/shared/UI/Signin/Signin';
import theme from '@/styles/global-style';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
// import { WebRTCComponent } from '../api/server-context/webrtc';
import { Meeting } from '@/components/meeting/meeting';
import { Home } from '@/components/home/home';
export default function Router() {
  return (
    <div>
      <Routes>
        {/* <Route index path="/" element={<HomeComponent />} /> */}
        <Route
          index
          path="login"
          element={
            <Background>
              <ChakraProvider theme={theme}>
                <SigningComponent />
              </ChakraProvider>
            </Background>
          }
        />

        {/* <Route
          index
          path="/home"
          element={
            <ChakraProvider theme={theme}>
              <Dashboard />
            </ChakraProvider>
          }
        /> */}
        <Route
          index
          path="/meet"
          element={
            <ChakraProvider theme={theme}>
              <Container />
            </ChakraProvider>
          }
        />

        <Route
          index
          path="/create-account"
          element={
            <Background>
              <ChakraProvider theme={theme}>
                <CreateAccountComponent />
              </ChakraProvider>
            </Background>
          }
        />
        {/* <Route
          index
          path="/web"
          element={
            <ChakraProvider theme={theme}>
              <WebRTCComponent />
            </ChakraProvider>
          }
        /> */}

        <Route
          path="*"
          element={
            <ChakraProvider theme={theme}>
              <Missing />
            </ChakraProvider>
          }
        />
        <Route
          index
          path="/meeting/*"
          element={
            <ChakraProvider theme={theme}>
              <Meeting />
            </ChakraProvider>
          }
        />
        <Route
          index
          path="/home"
          element={
            <ChakraProvider theme={theme}>
              <Home />
            </ChakraProvider>
          }
        />
      </Routes>
    </div>
  );
}

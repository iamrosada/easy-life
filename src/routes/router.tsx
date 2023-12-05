import Missing from '@/pages/404';
import HomeComponent from '@/pages/Home/home';
import Background from '@/shared/UI/Background/Background';
import ChatComponent from '@/shared/UI/Chat';
// import ChatComponent from '@/shared/UI/Chat';
import { CreateAccountComponent } from '@/shared/UI/CreateAccount/CreateAccount';
import Dashboard from '@/shared/UI/Dashboard';
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
          path="login"
          element={
            <Background>
              <ChakraProvider theme={theme}>
                <SigningComponent />
              </ChakraProvider>
            </Background>
          }
        />

        <Route
          index
          path="/dash"
          element={
            <ChakraProvider theme={theme}>
              <ChatComponent />
            </ChakraProvider>
          }
        />

        <Route
          index
          path="/home"
          element={
            <ChakraProvider theme={theme}>
              <Dashboard />
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
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

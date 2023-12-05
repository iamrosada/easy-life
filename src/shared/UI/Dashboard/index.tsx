import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import SearchStudent from './student';

import logoIcon from '../../../assets/logo.svg';
export default function Dashboard() {
  return (
    <Box className="h-[100vh]">
      <Box>
        <Flex
          className="w-[100vw] h-[65px] bg-white border-t-[1.5px] [border-top-style:solid] border-b-[1.5px] [border-bottom-style:solid] border-l-[1.5px] [border-left-style:solid] border-[#d9d9d94a]"
          borderBottom={2}
          borderStyle={'solid'}
          align={'center'}
        >
          <section className="mx-auto max-w-[1100px] flex flex-row justify-between ">
            <nav className="flex items-start">
              <div className="flex items-start space-x-2">
                <img src={logoIcon} alt="Logo" className="h-6 w-6" />
                <span className="text-black font-inter text-2xl font-extrabold leading-6 tracking-wide text-left">
                  Easy Life
                </span>
              </div>
            </nav>
          </section>
        </Flex>
      </Box>
      <Tabs isLazy>
        <TabList className="flex flex-row justify-center items-center">
          <Tab className="text-[20px] font-bold">Preparar Aula</Tab>
          <Tab className="text-[20px] font-bold">Estudantes</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel className="flex justify-center items-center">
            {/* <p>two!</p> */}
            <SearchStudent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

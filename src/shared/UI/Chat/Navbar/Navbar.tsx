import {
  Box,
  Flex,
  Text,
  Image,
  // Icon,
  Popover,
  PopoverTrigger,
  // PopoverContent,
  useColorModeValue,
  Stack,
  // useBreakpointValue,
} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function WithSubnavigation() {
  return (
    <Box>
      <Flex
        className="w-[100vw] h-[65px] bg-white border-t-[1.5px] [border-top-style:solid] border-b-[1.5px] [border-bottom-style:solid] border-l-[1.5px] [border-left-style:solid] border-[#d9d9d94a]"
        color={useColorModeValue('gray.600', 'white')}
        borderBottom={2}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex className="flex flex-row justify-between w-[100vw]">
          <DesktopNav />

          <Box className="flex rounded-[83px] m-2  p-[30px] items-center justify-between bg-[#F6F6F6] w-[360px] h-[6px]">
            <Box className="flex">
              <Box className="border-[3px] border-white rounded-[50px] h-9">
                <Image
                  borderRadius="full"
                  boxSize="20px"
                  className="w-9 h-9"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Box>

              <Box className="flex flex-col ml-10 ">
                <Text className="text-[#25293B] font-inter font-medium text-base leading-[32.667px]">
                  Adam Joseph
                </Text>
                <Text className="text-gray-500  font-inter font-medium text-xs leading-4 tracking-tighter">
                  Moderator
                </Text>
              </Box>
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="20"
                viewBox="0 0 5 20"
                fill="none"
              >
                <path
                  d="M4.53259 17.7337C4.53259 18.3348 4.29382 18.9112 3.8688 19.3362C3.44379 19.7612 2.86735 20 2.26629 20C1.66523 20 1.08879 19.7612 0.663781 19.3362C0.238769 18.9112 -7.27897e-08 18.3348 -9.90628e-08 17.7337C-1.25336e-07 17.1326 0.238769 16.5562 0.663781 16.1312C1.08879 15.7062 1.66523 15.4674 2.26629 15.4674C2.86735 15.4674 3.44379 15.7062 3.8688 16.1312C4.29382 16.5562 4.53259 17.1326 4.53259 17.7337ZM4.53259 10.1794C4.53259 10.7805 4.29382 11.3569 3.8688 11.7819C3.44379 12.2069 2.86735 12.4457 2.26629 12.4457C1.66523 12.4457 1.08879 12.2069 0.663781 11.7819C0.238769 11.3569 -4.02999e-07 10.7805 -4.29272e-07 10.1794C-4.55545e-07 9.57834 0.238769 9.0019 0.663781 8.57689C1.08879 8.15188 1.66523 7.91311 2.26629 7.91311C2.86735 7.91311 3.44379 8.15188 3.8688 8.57689C4.29382 9.0019 4.53259 9.57834 4.53259 10.1794ZM4.53258 2.62509C4.53258 3.22615 4.29382 3.80259 3.8688 4.2276C3.44379 4.65261 2.86735 4.89138 2.26629 4.89138C1.66523 4.89138 1.08879 4.65261 0.663781 4.2276C0.238768 3.80259 -7.33208e-07 3.22615 -7.59481e-07 2.62509C-7.85755e-07 2.02403 0.238768 1.44759 0.663781 1.02258C1.08879 0.597567 1.66523 0.358797 2.26629 0.358797C2.86735 0.358797 3.44379 0.597566 3.8688 1.02258C4.29382 1.44759 4.53258 2.02403 4.53258 2.62509Z"
                  fill="#A2A7B4"
                />
              </svg>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      <Box className="flex flex-row justify-between">
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Box
              as="a"
              p={2}
              fontSize={'sm'}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}
            >
              <strong className="text-gray-800 font-inter font-medium text-2xl leading-normal">
                [Internal] Weekly Report Marketing + Sales
              </strong>
              <Text className="text-[#ACACAC] font-inter font-medium text-[14px] leading-normal">
                June 12th, 2022 | 11:00 AM
              </Text>
            </Box>
          </PopoverTrigger>
        </Popover>
      </Box>
    </Stack>
  );
};

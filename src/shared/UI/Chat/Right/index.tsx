/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IconButton,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Image,
  FlexProps,
} from '@chakra-ui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

import videoIcon from '../img/Video.svg';
import microphoneIcon from '../img/microphone.svg';
import videoNotMutedIcon from '../img/video-not-muted.svg';
import muteAudioIcon from '../img/mute-audio.svg';

export default function SimpleSidebar() {
  return (
    <Box className="bg-[#DFEBFF]">
      <SidebarContent />
    </Box>
  );
}
//className="fixed px-4 pt-16 h-[979px] w-[422px] mt-[111px] top-0 "
//className="mx-auto w-full max-w-md rounded-2xl bg-white p-2"
const SidebarContent = () => {
  return (
    <div className="w-[422px]">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between  bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span className="w-[106.252px] h-[33px] flex-shrink-0 font-[600] text-[18px] leading-[32.667px]">
                  Participants
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <ParticipantComponents />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between  bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span className="w-[106.252px] h-[33px] flex-shrink-0 font-[600] text-[18px] leading-[32.667px]">
                  Chat
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <ChatForParticipants />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        // icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

const ParticipantComponents = () => {
  return (
    <>
      {participants_array.map(participant => {
        return (
          <Box
            key={participant.id}
            className="flex rounded-[83px]  items-center justify-between"
          >
            <Box className="flex items-center justify-center">
              <Image
                borderRadius="full"
                boxSize="20px"
                className="w-[55px] h-[55px]"
                src={participant.img}
                alt="Dan Abramov"
              />

              <Text className="text-[#25293B] ml-10  font-medium text-base leading-[32.667px]">
                {participant.name}
              </Text>
            </Box>
            <Box className="flex justify-around items-center">
              <Image
                // borderRadius="full"
                boxSize="20px"
                // className="w-[55px] h-[55px]"
                src={participant.icon_audio ? videoNotMutedIcon : videoIcon}
                alt="Dan Abramov"
              />
              <Image
                // borderRadius="full"
                boxSize="20px"
                className="ml-2"
                src={participant.icon_video ? microphoneIcon : muteAudioIcon}
                alt="Dan Abramov"
              />
            </Box>
          </Box>
        );
      })}
    </>
  );
};

const ChatForParticipants = () => {
  return (
    <>
      <Box className="flex mt-[30px] flex-row justify-around items-center">
        <Box className="border-[3px] border-white rounded-full">
          <Image
            borderRadius="full"
            boxSize="20px"
            className="w-12 h-12"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>

        <Box className="p-2 m-1 flex flex-col rounded-[10px] bg-white justify-items-start">
          <Text className="font-inter text-[#AFAFAF] text-[10px] leading-[28.167px] font-medium">
            Kathryn Murphy
          </Text>
          <Text className=" font-inter text-[#25293B] text-[15.301px] leading-[29.401px] font-normal">
            Good afternoon, everyone.
          </Text>
        </Box>

        <Box>
          <Text className="text-gray-500 font-inter font-medium text-xs leading-[22.15px]">
            11:02 AM
          </Text>
        </Box>
      </Box>
    </>
  );
};

type ParticipantsI = {
  id: number;
  img: string;
  name: string;
  icon_audio: boolean;
  icon_video: boolean;
};

const participants_array: ParticipantsI[] = [
  {
    id: 1,
    img: 'https://bit.ly/dan-abramov',
    name: 'Dianne Russell',
    icon_audio: false,
    icon_video: true,
  },

  {
    id: 2,
    img: 'https://bit.ly/dan-abramov',
    name: 'Guy Hawkins',
    icon_audio: false,
    icon_video: true,
  },
  {
    id: 3,
    img: 'https://bit.ly/dan-abramov',
    name: 'Kathryn Murphy',
    icon_audio: true,
    icon_video: false,
  },
  {
    id: 4,
    img: 'https://bit.ly/dan-abramov',
    name: 'Theresa Webb',
    icon_audio: false,
    icon_video: false,
  },
];

import React from 'react';
import { HStack } from '@chakra-ui/react';
import SettingsButton from '../buttons/SettingsButton';
import { ControllAboutVideo } from '../buttons/MicrophoneButton';

interface Props {
  onLeave: () => void;
}

export default function ControlsCenter(): JSX.Element {
  return (
    <HStack spacing="24px">
      {/* <MicrophoneButton />
      <CameraButton />
      <ScreenShareButton /> */}
      <ControllAboutVideo />
      <SettingsButton
        onLeave={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </HStack>
  );
}

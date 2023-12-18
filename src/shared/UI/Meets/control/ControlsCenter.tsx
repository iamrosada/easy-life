import { HStack } from '@chakra-ui/react';
import { ControllAboutVideo } from '../buttons/MicrophoneButton';

export default function ControlsCenter(): JSX.Element {
  return (
    <HStack spacing="24px">
      <ControllAboutVideo />
    </HStack>
  );
}

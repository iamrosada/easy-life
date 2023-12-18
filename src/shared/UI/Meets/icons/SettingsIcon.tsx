import elipsisIcon from '../../../../../public/icons/elipsis.svg';
import { Image } from '@chakra-ui/react';

export default function SettingsIcon() {
  return (
    <Image
      alt="settings"
      width={25}
      height={25}
      src={elipsisIcon}
      style={{ width: '25px', height: '25px' }}
    />
  );
}

import React from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  color,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import useWindowDimensions from '../hooks/useWindowDimensions';
import SettingsIcon from '../icons/SettingsIcon';
import { ToastIds, copyLinkToastConfig } from '@/shared/toastConfigs';
// import { useSpace } from "hooks/useSpace";

// import RenameParticipantModal from "components/modals/RenameParticipantModal";

interface Props {
  onLeave: () => void;
}

export default function SettingsButton({ onLeave }: Props): JSX.Element {
  const toast = useToast();
  const { width } = useWindowDimensions();
  // const { isLocalScreenShare } = useSpace();

  const {
    isOpen: isRenameModalOpen,
    onOpen: onRenameModalOpen,
    onClose: onRenameModalClose,
  } = useDisclosure();

  const smallWindowWidth = (width && width < 480) || false;

  const shareLink = () => {
    navigator.clipboard.writeText(
      `${window.location.protocol}//${window.location.host}/space/}`
    );
    if (!toast.isActive(ToastIds.COPY_LINK_TOAST_ID)) {
      toast(copyLinkToastConfig);
    }
  };

  return (
    <>
      {/* <RenameParticipantModal
        isOpen={isRenameModalOpen}
        onClose={onRenameModalClose}
      /> */}
      <Box>
        <Menu placement="top">
          <MenuButton
            as={IconButton}
            variant="control"
            aria-label="Options"
            icon={<SettingsIcon />}
          />
          <MenuList
            background="#383838"
            border="1px solid #323232"
            color="#CCCCCC"
            padding="5px 10px"
            width="200px"
          >
            <MenuItem disabled={false} onClick={onRenameModalOpen}>
              Change Name
            </MenuItem>
            <MenuItem onClick={shareLink}>Copy Invite Link</MenuItem>
            {smallWindowWidth && <MenuItem onClick={onLeave}>Leave</MenuItem>}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

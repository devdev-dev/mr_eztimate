import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import * as React from 'react';
import { useOpenSignInUpScreen } from '../AppLayoutContext';
import SignIn from './SignIn';

const AuthModal = () => {
  const openLoginScreen = useOpenSignInUpScreen();
  if (!openLoginScreen.isOpen) return null;

  return (
    <Modal isOpen={openLoginScreen.isOpen} onClose={openLoginScreen.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p="4">
          <SignIn />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
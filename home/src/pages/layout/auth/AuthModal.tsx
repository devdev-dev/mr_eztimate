import {
  Box,
  Button,
  Divider,
  Flex,
  FlexProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useOpenSignInUpScreen } from '../AppLayoutContext';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthModal = () => {
  const openLoginScreen = useOpenSignInUpScreen();
  if (!openLoginScreen.isOpen) return null;

  return (
    <Modal isOpen={openLoginScreen.isOpen} onClose={openLoginScreen.onClose}>
      <ModalOverlay />
      <ModalContent>
        <Tabs isFitted variant="enclosed">
          <ModalHeader>
            <TabList mb="1em">
              <Tab>Sign In</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
          </ModalHeader>
          <ModalBody>
            <TabPanels>
              <TabPanel>
                <SignIn />
                <OAuthSection />
              </TabPanel>
              <TabPanel>
                <SignUp />
                <OAuthSection />
              </TabPanel>
            </TabPanels>
          </ModalBody>
        </Tabs>
      </ModalContent>
    </Modal>
  );
};

const OAuthSection = () => (
  <>
    <DividerWithText mt="6">or continue with</DividerWithText>
    <SimpleGrid my="6" columns={2} spacing="3">
      <Button color="currentColor" variant="outline">
        <VisuallyHidden>Login with Google</VisuallyHidden>
        <FaGoogle />
      </Button>
      <Button color="currentColor" variant="outline">
        <VisuallyHidden>Login with Github</VisuallyHidden>
        <FaGithub />
      </Button>
    </SimpleGrid>
  </>
);

const DividerWithText = (props: FlexProps) => {
  const { children, ...flexProps } = props;
  return (
    <Flex align="center" color="gray.300" {...flexProps}>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
      <Text as="span" px="3" color={useColorModeValue('gray.600', 'gray.400')} fontWeight="medium">
        {children}
      </Text>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  );
};

export default AuthModal
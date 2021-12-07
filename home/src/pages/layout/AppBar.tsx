import { Button, Flex, HStack, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import * as React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { supabase } from '../../utils/supabase';
import { useSession } from '../index/SessionContext';
import { useOpenSignInUpScreen } from './AppLayoutContext';
import AuthModal from './auth/AuthModal';

const AppBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const openLoginScreen = useOpenSignInUpScreen();
  const session = useSession();

  return (
    <>
      <Flex
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between' }}
      >
        <NextLink href="/" passHref>
          <Button ml={{ base: '4' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Eztimate App
          </Button>
        </NextLink>

        <HStack spacing={{ base: '0', md: '6' }}>
          {session && (
            <Button variant={'link'} colorScheme={'blue'} size={'sm'} onClick={() => supabase.auth.signOut()}>
              Sign Out
            </Button>
          )}
          {!session && (
            <Button variant={'link'} colorScheme={'blue'} size={'sm'} onClick={openLoginScreen.onOpen}>
              Sign In / Up
            </Button>
          )}
          <IconButton size="lg" variant="ghost" aria-label="open menu" icon={colorMode === 'light' ? <FiMoon /> : <FiSun />} onClick={toggleColorMode} />
        </HStack>
      </Flex>
      <AuthModal />
    </>
  );
};

export default AppBar
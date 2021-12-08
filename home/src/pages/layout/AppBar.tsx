import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import NextLink from 'next/link';
import * as React from 'react';
import { FiChevronDown, FiEdit, FiLayout, FiLogOut, FiMoon, FiStopCircle, FiSun } from 'react-icons/fi';
import { supabase } from '../../utils/supabase';
import { useSession } from '../index/SessionContext';
import { useOpenSignInUpScreen } from './AppLayoutContext';
import AuthModal from './auth/AuthModal';

const AppBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
          <IconButton size="lg" variant="ghost" aria-label="open menu" icon={colorMode === 'light' ? <FiMoon /> : <FiSun />} onClick={toggleColorMode} />
          <Flex alignItems={'center'}>
            {!session && <AppBarLogin />}
            {session && <AppBarUser />}
          </Flex>
        </HStack>
      </Flex>
      <AuthModal />
    </>
  );
};

function AppBarLogin() {
  const openLoginScreen = useOpenSignInUpScreen();

  return (
    <HStack>
      <Button onClick={openLoginScreen.onOpen}>
        <Text fontSize="sm">Sign In / Up</Text>
      </Button>
    </HStack>
  );
}

function AppBarUser() {
  const session = useSession();
  return (
    <Menu matchWidth>
      <MenuButton p={2}>
        <HStack>
          <Avatar size={'sm'} />
          <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
            <Text fontSize="sm">{session && session.user?.email}</Text>
            <Text fontSize="xs" color="gray.600">
              {session && session.user?.id}
            </Text>
          </VStack>
          <Box display={{ base: 'none', md: 'flex' }}>
            <FiChevronDown />
          </Box>
        </HStack>
      </MenuButton>
      <MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <MenuItem minH="42px" icon={<FiLayout />}>
          Dashboard
        </MenuItem>
        <MenuItem minH="42px" icon={<FiEdit />}>
          Profile
        </MenuItem>
        <MenuItem minH="42px" icon={<FiStopCircle />}>
          Billing
        </MenuItem>
        <MenuDivider />
        <MenuItem minH="42px" icon={<FiLogOut />} onClick={() => supabase.auth.signOut()}>
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AppBar
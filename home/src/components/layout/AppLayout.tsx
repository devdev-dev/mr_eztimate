import { Box, Flex, HStack, IconButton, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { IconType } from 'react-icons';
import { FiCompass, FiHome, FiMoon, FiSettings, FiStar, FiSun, FiTrendingUp } from 'react-icons/fi';

export interface AppLayoutProps {
  children: React.ReactElement;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings }
];

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <MobileNav />
      <Box>{children}</Box>
    </Box>
  );
}

const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between' }}
    >
      <Text ml={{ base: '4' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={colorMode === 'light' ? <FiMoon /> : <FiSun />} onClick={toggleColorMode} />
      </HStack>
    </Flex>
  );
};

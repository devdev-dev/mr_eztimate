import { Box, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import AppBar from './AppBar';
import { AppLayoutContextProvider } from './AppLayoutContext';

export interface AppLayoutProps {
  children: React.ReactElement;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppLayoutContextProvider>
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <AppBar />
        <Box>{children}</Box>
      </Box>
    </AppLayoutContextProvider>
  );
}
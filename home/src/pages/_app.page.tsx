import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react';
import theme from '../styles/theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <ChakraProvider theme={theme} resetCSS>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
}

export default MyApp;

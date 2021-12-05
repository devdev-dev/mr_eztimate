import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ReactElement, ReactNode, useEffect } from 'react';
import theme from '../styles/theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const apolloClient = new ApolloClient({
  uri: '/eztimate/api/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useServiceWorker();

  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ChakraProvider theme={theme} resetCSS>
      <ApolloProvider client={apolloClient}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>
    </ChakraProvider>
  );
}

function useServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/serviceworker.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, []);
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: true
});

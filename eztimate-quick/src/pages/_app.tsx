import '../styles/globals.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from "../styles/theme";

export const apolloClient = new ApolloClient({
  uri: '/eztimate/api/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme} resetCSS>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
  )
}

export default MyApp

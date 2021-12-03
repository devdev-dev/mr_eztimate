import '../styles/globals.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import type { AppProps } from 'next/app'

export const apolloClient = new ApolloClient({
  uri: '/eztimate/api/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true
});

function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={apolloClient}><Component {...pageProps} /></ApolloProvider>
}

export default MyApp

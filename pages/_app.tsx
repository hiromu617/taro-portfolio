import type { AppProps } from 'next/app';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from '../theme/theme';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <link rel="stylesheet" href="https://use.typekit.net/ntm0tzg.css"></link>
      <Header />
      <Container pt="14" pb="20" px="5" mt="60px" minH="85vh">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ChakraProvider>
  );
}
export default MyApp;

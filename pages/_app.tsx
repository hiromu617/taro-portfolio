import type { AppProps } from 'next/app';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from '../theme/theme';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container bg="gray.400" p="5" mt="60px">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;

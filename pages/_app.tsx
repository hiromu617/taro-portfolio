import type { AppProps } from 'next/app';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container bg="gray.400" p="5">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;

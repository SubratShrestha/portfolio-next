import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/main';
import theme from '../libs/theme';
import FontProvider from '../components/layouts/fonts';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FontProvider />
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
};

export default Website;

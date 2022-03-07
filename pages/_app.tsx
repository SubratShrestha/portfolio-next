import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/main';
import theme from '../libs/theme';
import FontProvider from '../components/layouts/fonts';
import { AnimatePresence } from 'framer-motion';
import '../globalStyles.css';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FontProvider />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default Website;

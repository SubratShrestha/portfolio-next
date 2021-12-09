import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/main';
import theme from '../libs/theme';
import FontProvider from '../components/layouts/fonts';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <FontProvider />
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
};

export default Website;

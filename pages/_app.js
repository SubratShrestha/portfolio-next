import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/main';
import theme from "../libs/theme";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
};

export default Website;

import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hey, I'm an aspiring software engineer in Sydney, AUS.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Subrat Shrestha
          </Heading>
          <p>Subheading</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;

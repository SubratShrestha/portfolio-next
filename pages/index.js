import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import AnimatedSection from '../components/layouts/animatedSection';

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Subrat Shrestha
          </Heading>
          {/* <p>Subheading</p> */}
        </Box>
      </Box>

      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={6} // maybe
        align="center"
      >
        Hey, I'm an aspiring software engineer in Sydney.
      </Box>

      <AnimatedSection delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>some work stuff.</p>
      </AnimatedSection>
    </Container>
  );
};

export default Page;

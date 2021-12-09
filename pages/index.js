import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import AnimatedSection from '../components/layouts/animatedSection';
import Paragraph from '../components/layouts/paragraph';

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Subrat Shrestha
          </Heading>
          <p>Student at UNSW.</p>
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
        Aspiring software engineer based in Sydney.
      </Box>

      <AnimatedSection delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>some work stuff.</Paragraph>
      </AnimatedSection>
    </Container>
  );
};

export default Page;

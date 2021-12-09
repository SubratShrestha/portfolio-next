import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import AnimatedSection from '../components/layouts/animatedSection';
import Paragraph from '../components/layouts/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';

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

      <Box align="center" my={4}>
        <Link href="/resume.pdf">
          <a target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              View Resume
            </Button>
          </a>
        </Link>
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

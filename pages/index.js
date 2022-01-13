import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import AnimatedSection from '../components/layouts/animatedSection'
import Paragraph from '../components/layouts/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container maxW='container.md' margin={0}>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h1' variant='page-title' size='4xl'>
            Subrat
            <br />
            Shrestha
          </Heading>

          <Text fontSize='2xl'>
            Aspiring Software Engineer
            <br />& Student at UNSW.
          </Text>
        </Box>
      </Box>

      <Box align='center' my={4}>
        <Link href='/resume.pdf'>
          <a target='_blank'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              View Resume
            </Button>
          </a>
        </Link>
      </Box>
    </Container>

      /* <AnimatedSection delay={0.1}> */
      /*   <Heading as="h3" variant="section-title"> */
      /*     Work */
      /*   </Heading> */
      /*   <Paragraph>some work stuff.</Paragraph> */
      /* </AnimatedSection> */
  )
}

export default Page

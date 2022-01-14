import type { NextPage } from 'next'
import {
  Container,
  Box,
  Heading,
  Text,
  // useColorModeValue,
  Button,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
// import AnimatedSection from '../components/layouts/animatedSection'
// import Paragraph from '../components/layouts/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page: NextPage = () => {
  return (
    <Container maxW='container.lg' margin={0}>
      <Container
        display={{ base: 'flex' }}
        margin={0}
        maxW='100%'
        justifyContent={{ base: 'space-between' }}
      >
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

        <Box>
        <Heading as="h2" size="md">
            Work:
        </Heading>
        <VStack spacing={8}>
          <Box>project #1</Box>
          <Box>project #2</Box>
          <Box>project #3</Box>
          <Box>project #4</Box>
        </VStack>
        </Box>
      </Container>

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

export default Page;

import type { NextPage } from 'next'
import { Container, Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import WorkList from '../components/layouts/workList'
import AnimatedPage from '../components/layouts/animatedPage'
import { banner, fadeInUp, letterAnimation, stagger } from '../libs/animations'
import { AnimatePresence, motion } from 'framer-motion'

const AnimatedLetters = ({ words }: { words: Array<string> }) => (
  <motion.div
    style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    variants={banner}
    initial='initial'
    animate='animate'
  >
    {words.map(word => (
      <Flex>
        {Array.from(word).map(letter => (
          <motion.div variants={letterAnimation}>
            <Heading as='h1' fontSize='6xl'>
              {letter}
            </Heading>
          </motion.div>
        ))}
      </Flex>
    ))}
  </motion.div>
)

const Page: NextPage = () => {
  return (
    <AnimatePresence>
      <AnimatedPage>
        <Container
          maxW='container.lg'
          margin={0}
          display='flex'
          flexDirection='column'
          alignItems='center'
          height='100%'
          justifyContent='center'
        >
          <Container
            display={{ base: 'block', md: 'flex' }}
            margin={0}
            maxW='100%'
            height={{ base: '75%', md: '45%' }}
            justifyContent={{ base: 'space-between' }}
            marginTop='5%'
          >
            <Box display={{ md: 'flex' }} width={{ md: '80%', base: '100%' }}>
              <motion.div variants={banner} style={{ width: '100%' }}>
                <AnimatedLetters words={['Subrat', 'Shrestha']} />
                <motion.div initial='initial' animate='animate'>
                  <motion.div variants={stagger}>
                    <motion.div variants={fadeInUp}>
                      <Text fontSize='2xl' textColor='#999'>
                        Aspiring Software Engineer
                        <br />& Student at UNSW.
                      </Text>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Box>
            <WorkList />
          </Container>

          <Box my={4}>
            <Link href='/resume.pdf'>
              <a target='_blank'>
                <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                  View Resume
                </Button>
              </a>
            </Link>
          </Box>
        </Container>
      </AnimatedPage>
    </AnimatePresence>
  )
}

export default Page

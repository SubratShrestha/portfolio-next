import WorkContainer from '../components/layouts/workContainer'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { fullList } from '../libs/work'
import {
  Heading,
  Text,
  Link,
  Box,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  Badge,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton
} from '@chakra-ui/react'
import WrapTags from '../components/layouts/wrapTags'
import AnimatedPage from '../components/layouts/animatedPage'
import { stagger, fadeInUp } from '../libs/animations'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const WorkPage: NextPage = () => {
  const isMd = useMediaQuery({ query: '(min-width: 48em)' })

  return (
    <AnimatedPage>
      <WorkContainer>
        <motion.div initial='initial' animate='animate'>
          <motion.div
            variants={stagger}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {Object.keys(fullList).map(key => (
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                style={isMd ? { width: '70%' } : { width: '90%' }}
              >
                <Box
                  backgroundColor={useColorModeValue('#DEE6E5', '#292A2F')}
                  borderRadius='lg'
                  p={6}
                  position='relative'
                  marginBottom={8}
                >
                  {fullList[key].learn === true && (
                    <Box position='absolute' top={2} right={2}>
                      <Popover trigger={isMd ? 'hover' : 'click'}>
                        <PopoverTrigger>
                          <Badge px={1} colorScheme='purple' cursor='default'>
                            learn
                          </Badge>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverBody fontSize='md' marginRight={2}>
                            This is a project indended for learning purposes
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Box>
                  )}
                  {fullList[key].link || fullList[key].source ? (
                    <NextLink
                      href={fullList[key].link ?? fullList[key].source ?? ''}
                    >
                      <Link
                        key={fullList[key].key}
                        style={{ textDecoration: 'none' }}
                        textColor={useColorModeValue('#202023', 'white')}
                        href={fullList[key].link || fullList[key].source || ''}
                        isExternal={typeof fullList[key].link !== 'string'}
                      >
                        <Heading as='h2' fontSize='2xl' mb={2}>
                          {fullList[key].title}
                        </Heading>
                        <Text mb={3}>{fullList[key].desc}</Text>
                        <WrapTags name={key} full={true} />
                      </Link>
                    </NextLink>
                  ) : (
                    <>
                      <Heading as='h2' fontSize='2xl' mb={2}>
                        {fullList[key].title}
                      </Heading>
                      <Text mb={3}>{fullList[key].desc}</Text>
                      <WrapTags name={key} full={true} />
                      <Text fontSize='xs' mt={4}>
                        {fullList[key].note || ''}
                      </Text>
                    </>
                  )}
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </WorkContainer>
    </AnimatedPage>
  )
}

export default WorkPage

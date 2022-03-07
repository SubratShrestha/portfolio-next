import { NextPage } from 'next';
import { Flex, Heading, List, Box, Text } from '@chakra-ui/react';
import Divider from '../components/layouts/divider';
import WorkContainer from '../components/layouts/workContainer';
import WorkHeader from '../components/layouts/workHeader';
import WrapTags from '../components/layouts/wrapTags';
import ChevronList from '../components/layouts/chevronList';
import AnimatedPage from '../components/layouts/animatedPage';
import { fadeInUp, stagger } from '../libs/animations';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const NeuralPage: NextPage = () => {
  const isMd = useMediaQuery({ query: '(min-width: 48em)' });

  return (
    <AnimatedPage>
      <motion.div initial="initial" animate="animate">
        <WorkContainer>
          <motion.div variants={stagger}>
            <motion.div variants={fadeInUp}>
              <WorkHeader
                title="Neural Stimulator"
                href="https://www.challeng.unsw.edu.au/challeng-projects/neural-stimulator"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Divider />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <WrapTags name="neuro" />
            </motion.div>
            <Flex paddingTop={16} flexDir={{ md: 'row', base: 'column' }}>
              <motion.div variants={fadeInUp} style={{ flex: 1 }}>
                <Heading fontSize="3xl" as="h1">
                  What I did
                </Heading>
              </motion.div>
              <motion.div variants={fadeInUp} style={{ flex: 2 }}>
                <Box>
                  <List spacing={4}>
                    <motion.div variants={fadeInUp}>
                      <ChevronList>
                        Designed the firmware for a wireless neural stimulator.
                      </ChevronList>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <ChevronList>
                        Reduced power consumption by 40% by redesigning the
                        component selection, switching to Bluetooth Low Energy
                        over WiFi and improving the use of sleep cycles using{' '}
                        <b>FreeRTOS</b>.
                      </ChevronList>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <ChevronList>
                        Implemented pulse generation and neural recording
                        functionality using a <b>DAC and ADC</b>.
                      </ChevronList>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <ChevronList>
                        Developed wireless communication functionality using{' '}
                        <b>Bluetooth Low Energy</b>.
                      </ChevronList>
                    </motion.div>
                  </List>
                </Box>
              </motion.div>
            </Flex>
            <Flex paddingTop={16} flexDir={{ md: 'row', base: 'column' }}>
              <Flex flexDir={{ md: 'column', base: 'row' }} flex={1}>
                <motion.div
                  variants={fadeInUp}
                  style={{ maxWidth: 'fit-content' }}
                >
                  <Heading fontSize="3xl" as="h1">
                    Project &nbsp;
                  </Heading>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Heading fontSize="3xl" as="h1">
                    Summary
                  </Heading>
                </motion.div>
              </Flex>
              <Box flex={2}>
                <motion.div variants={fadeInUp}>
                  <Text fontSize="lg">
                    As part of UNSW's Vertically Integrated Project program, we
                    aimed to build a wireless, affordable, miniature neural
                    stimulator that researchers could feasibly get and perform
                    experiments with to better understand the effects of neural
                    stimulation on illnesses like Parkinson's, chronic pain,
                    epilepsy and depression.
                  </Text>
                </motion.div>
              </Box>
            </Flex>
            <Flex paddingTop={16} flexDir={{ md: 'row', base: 'column' }}>
              <Flex flexDir={{ md: 'column', base: 'row' }} flex={1}>
                <motion.div
                  variants={fadeInUp}
                  style={{ maxWidth: 'fit-content' }}
                >
                  <Heading fontSize="3xl" as="h1">
                    The &nbsp;
                  </Heading>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Heading fontSize="3xl" as="h1">
                    Problem
                  </Heading>
                </motion.div>
              </Flex>
              <Box flex={2}>
                <motion.div variants={fadeInUp}>
                  <Text fontSize="lg">
                    Currently, commercial neural stimulators need to be tethered
                    to the animal and to make the system as small as possible, a
                    custom made ASIC (Application Specific Integrated Circuit)
                    needs to be constructed. This makes the system incredibly
                    expensive and often infeasible.
                  </Text>
                </motion.div>
              </Box>
            </Flex>
            <Flex paddingTop={16} flexDir={{ md: 'row', base: 'column' }}>
              <Flex flexDir={{ md: 'column', base: 'row' }} flex={1}>
                <motion.div
                  variants={fadeInUp}
                  style={{ maxWidth: isMd ? '' : 'fit-content' }}
                >
                  <Heading fontSize="3xl" as="h1">
                    Our &nbsp;
                  </Heading>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Heading fontSize="3xl" as="h1">
                    Solution
                  </Heading>
                </motion.div>
              </Flex>
              <Box flex={2}>
                <motion.div variants={fadeInUp}>
                  <Text fontSize="lg">
                    The solution we came up with involved a neural stimulator
                    that is not as miniturized, but uses a larger board
                    consisting of off-the-shelf components. This makes the
                    system more affordable, accessible, and more versatile
                    because components can be replaced, added or removed
                    according to the experiment. The firmware for its basic
                    functionality is also open-sourced, making it possible to
                    share additional functionality using different components.
                  </Text>
                </motion.div>
              </Box>
            </Flex>
          </motion.div>
        </WorkContainer>
      </motion.div>
    </AnimatedPage>
  );
};

export default NeuralPage;

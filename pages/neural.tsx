import { NextPage } from 'next'
import { Flex, Heading, List, Box, Text } from '@chakra-ui/react'
import Divider from '../components/layouts/divider'
import WorkContainer from '../components/layouts/workContainer'
import WorkHeader from '../components/layouts/workHeader'
import WrapTags from '../components/layouts/wrapTags'
import ChevronList from '../components/layouts/chevronList'

const NeuralPage: NextPage = () => {
  return (
    <WorkContainer>
      <WorkHeader title='Neural Stimulator' href="https://www.challeng.unsw.edu.au/challeng-projects/neural-stimulator" />
      <Divider />
      <WrapTags name='neuro' />
      <Flex paddingTop={16} flexDir={{ md: 'row', base: 'column' }}>
        <Heading fontSize='3xl' as='h1' flex={1}>
          What I did
        </Heading>
        <Box flex={2}>
          <List spacing={4}>
            <ChevronList>
              Designed the firmware for a wireless neural stimulator.
            </ChevronList>
            <ChevronList>
              Reduced power consumption by 40% by redesigning the component
              selection, switching to Bluetooth Low Energy over WiFi and
              improving the use of sleep cycles using <b>FreeRTOS</b>.
            </ChevronList>
            <ChevronList>
              Implemented pulse generation and neural recording functionality
              using a <b>DAC and ADC</b>.
            </ChevronList>
            <ChevronList>
              Developed wireless communication functionality using{' '}
              <b>Bluetooth Low Energy</b>.
            </ChevronList>
          </List>
        </Box>
      </Flex>
      <Flex paddingTop={16} flexDir={{ md: 'row', base: 'column' }}>
        <Flex flexDir={{ md: 'column', base: 'row' }} flex={1}>
          <Heading fontSize='3xl' as='h1' maxWidth='fit-content'>
            Project &nbsp;
          </Heading>
          <Heading fontSize='3xl' as='h1'>
            Summary
          </Heading>
        </Flex>
        <Box flex={2}>
          <Text fontSize='lg'>
            As part of UNSW's Vertically Integrated Project program, we aimed to
            build a wireless, affordable, miniature neural stimulator that
            researchers can feasibly get and perform experiments with to better
            understand the use of neural stimulation in treating illnesses like
            Parkinson's, chronic pain, epilepsy and depression.
          </Text>
        </Box>
      </Flex>
      <Flex paddingTop={16} flexDir={{ md: 'row', base: 'column' }}>
        <Flex flexDir={{ md: 'column', base: 'row' }} flex={1}>
          <Heading fontSize='3xl' as='h1' maxWidth='fit-content'>
            The &nbsp;
          </Heading>
          <Heading fontSize='3xl' as='h1'>
            Problem
          </Heading>
        </Flex>
        <Box flex={2}>
          <Text fontSize='lg'>
            Currently, commercial neural stimulators need to be tethered to the
            animal and to make the system as small as possible, a custom made
            ASIC (Application Specific Integrated Circuit) needs to be
            constructed. This makes the system incredibly expensive and
            infeasible for researchers.
          </Text>
        </Box>
      </Flex>
      <Flex paddingTop={16} flexDir={{ md: 'row', base: 'column' }}>
        <Flex flexDir={{ md: 'column', base: 'row' }} flex={1}>
          <Heading
            fontSize='3xl'
            as='h1'
            maxWidth={{ md: "", base: "fit-content" }}
          >
            Our &nbsp;
          </Heading>
          <Heading fontSize='3xl' as='h1'>
            Solution
          </Heading>
        </Flex>
        <Box flex={2}>
          <Text fontSize='lg'>
            The solution we came up with involved a neural stimulator that is
            not as miniturized, but uses a larger board consisting of
            off-the-shelf components, making the system more affordable and
            accessible. This also makes the system more versatile by making it
            possible to replace, add or remove components as the experiment
            requires. The firmware for its basic functionality is also
            open-sourced, making it possible to share newer functionality using
            different components.
          </Text>
        </Box>
      </Flex>
    </WorkContainer>
  )
}

export default NeuralPage

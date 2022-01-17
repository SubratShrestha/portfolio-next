import { Box, Flex, Heading, HStack, StackDivider, Tag } from '@chakra-ui/react'
import { NextPage } from 'next'
import Divider from '../components/layouts/divider'
import works from '../libs/work'

const EarnrPage: NextPage = () => {
  const data = works['earnr']
  return (
    <Box height='100%' width='100%' pt={20}>
      <Flex flexDirection='row' justifyContent='space-between' px={10}>
        <Heading as='h1' size='lg'>
          {data.title}
        </Heading>
        <Heading as='h1' size='lg'>
          Software Engineer Intern
        </Heading>
      </Flex>
      <Divider height='1px' color='gray.200' marginY={3} />
      <HStack>
        {data.tags?.map((value, index) => (
          <Tag key={index} backgroundColor={value.color}>{value.value}</Tag>
        ))}
      </HStack>
    </Box>
  )
}

export default EarnrPage

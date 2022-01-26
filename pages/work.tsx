import WorkContainer from '../components/layouts/workContainer'
import { NextPage } from 'next'
import Divider from '../components/layouts/divider'
import { fullList } from '../libs/work'
import {
  Heading,
  Text,
  Link,
  Flex,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import WrapTags from '../components/layouts/wrapTags'
import WorkHeader from '../components/layouts/workHeader'

const WorkPage: NextPage = () => {
  return (
    <WorkContainer>
      <WorkHeader title='Full work list' />
      <Divider />
      <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        {Object.keys(fullList).map(key => (
          <Link
            key={fullList[key].key}
            style={{ textDecoration: 'none' }}
            textColor={useColorModeValue('#202023', 'white')}
            width='70%'
            marginBottom={8}
            href={fullList[key].link || fullList[key].source || ''}
            isExternal={typeof fullList[key].link !== 'string'}
          >
            <Box
              backgroundColor={useColorModeValue('#DEE6E5', '#292A2F')}
              borderRadius='lg'
              p={6}
            >
              <Heading as='h2' fontSize='2xl' mb={2}>
                {fullList[key].title}
              </Heading>
              <Text mb={3}>{fullList[key].desc}</Text>
              <WrapTags name={key} full={true} />
            </Box>
          </Link>
        ))}
      </Flex>
    </WorkContainer>
  )
}

export default WorkPage

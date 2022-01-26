import WorkContainer from '../components/layouts/workContainer'
import { NextPage } from 'next'
import { fullList } from '../libs/work'
import {
  Heading,
  Text,
  Link,
  Flex,
  Box,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  Badge,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody
} from '@chakra-ui/react'
import WrapTags from '../components/layouts/wrapTags'

const WorkPage: NextPage = () => {
  return (
    <WorkContainer>
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
              position='relative'
            >
              {fullList[key].learn === true && (
                <Box position='absolute' top={2} right={2}>
                  <Popover trigger='hover'>
                    <PopoverTrigger>
                      <Badge px={1} colorScheme='purple'>learn</Badge>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverBody fontSize="md">
                        This is a project indended for learning purposes
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
              )}
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

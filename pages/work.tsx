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
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader
} from '@chakra-ui/react'
import WrapTags from '../components/layouts/wrapTags'

const WorkPage: NextPage = () => {
  return (
    <WorkContainer>
      <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        {Object.keys(fullList).map(key => (
          <Box
            backgroundColor={useColorModeValue('#DEE6E5', '#292A2F')}
            borderRadius='lg'
            p={6}
            position='relative'
            width={{ md: '70%', base: '90%' }}
            marginBottom={8}
          >
            {fullList[key].learn === true && (
              <Box position='absolute' top={2} right={2}>
                <Popover trigger='hover'>
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
        ))}
      </Flex>
    </WorkContainer>
  )
}

export default WorkPage

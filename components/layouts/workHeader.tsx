import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Heading, Link } from '@chakra-ui/react'

interface headerProps {
  title: string
  position?: string
  href?: string
}

const WorkHeader = ({ title, position, href }: headerProps) => {
  return (
    <Flex
      flexDirection={{ md: 'row', base: 'column' }}
      justifyContent='space-between'
      alignItems='flex-start'
    >
      {href ? (
        <Link href={href} isExternal color='white'>
          <Heading as='h1' fontSize='3xl'>
            {title}
            <ExternalLinkIcon mx={4} fontSize='md' />
          </Heading>
        </Link>
      ) : (
        <Heading as='h1' fontSize='3xl'>
          {title}
        </Heading>
      )}

      {position && (
        <Heading as='h1' fontSize='2xl' color='gray'>
          {position}
        </Heading>
      )}
    </Flex>
  )
}

export default WorkHeader

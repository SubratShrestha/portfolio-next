import { Flex, Heading } from '@chakra-ui/react'

interface headerProps {
  title: string
  position?: string
}

const WorkHeader = ({ title, position }: headerProps) => {
  return (
    <Flex flexDirection='row' justifyContent='space-between'>
      <Heading as='h1' fontSize={{ md: '2xl', base: 'xl' }}>
        {title}
      </Heading>

      {position && (
        <Heading as='h1' fontSize={{ md: '2xl', base: 'xl' }}>
          {position}
        </Heading>
      )}
    </Flex>
  )
}

export default WorkHeader

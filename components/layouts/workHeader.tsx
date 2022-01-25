import { Flex, Heading } from '@chakra-ui/react'

interface headerProps {
  title: string
  position?: string
}

const WorkHeader = ({ title, position }: headerProps) => {
  return (
    <Flex flexDirection={{md: "row", base: 'column'}} justifyContent='space-between' alignItems='flex-start'>
      <Heading as='h1' fontSize='3xl'>
        {title}
      </Heading>

      {position && (
        <Heading as='h1' fontSize='2xl' color="gray">
          {position}
        </Heading>
      )}
    </Flex>
  )
}

export default WorkHeader

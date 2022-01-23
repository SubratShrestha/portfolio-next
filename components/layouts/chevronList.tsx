import { ListItem, Flex, Text, ListIcon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const ChevronList: React.FC = ({ children }) => {
  return (
    <ListItem>
      <Flex>
        <ListIcon as={ChevronRightIcon} marginTop={1} />
        <Text fontSize="lg">
            {children}
        </Text>
      </Flex>
    </ListItem>
  )
}

export default ChevronList

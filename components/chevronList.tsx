import {
  ListItem,
  Flex,
  Text,
  ListIcon,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const ChevronList: React.FC = ({ children }) => {
  const textProps = {
    fontSize: 'md',
    color: useColorModeValue('black', '#d4d4d4')
  };

  return (
    <ListItem>
      <Flex>
        <ListIcon as={ChevronRightIcon} marginTop={1} />
        <Text {...textProps}>{children}</Text>
      </Flex>
    </ListItem>
  );
};

export default ChevronList;

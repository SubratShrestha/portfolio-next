import { Text } from '@chakra-ui/react';

interface TextBoxProps {
  fontSize: string;
  color: string;
}

const TextBox: React.FC = (children, props: TextBoxProps) => {
  return <Text {...props}>{children}</Text>;
};

export default TextBox;

import { Box } from '@chakra-ui/react';
const WorkContainer: React.FC = ({ children }) => {
  return (
    <Box height="100%" width="100%" overflow="hidden" py={10}>
      {children}
    </Box>
  );
};
export default WorkContainer;

import { Box } from '@chakra-ui/react'
const WorkContainer: React.FC = ({ children }) => {
  return (
    <Box
      height='100%'
      width='100%'
      pt={{ md: 20, base: 10 }}
      px={{ md: 10, base: 3 }}
    >
      {children}
    </Box>
  )
}
export default WorkContainer

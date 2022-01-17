import { Box } from '@chakra-ui/react'

interface dividerProps {
  width?: string
  height: string
  color: string
  marginY: number
}
const Divider: React.FC<dividerProps> = ({
  width = '100%',
  height,
  color,
  marginY
}) => {
  return (
    <Box width={width} height={height} backgroundColor={color} my={marginY} />
  )
}

export default Divider;

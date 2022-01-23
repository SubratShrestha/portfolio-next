import { Box, useColorModeValue } from '@chakra-ui/react'

const Divider = () => {
  return (
    <Box
      width='100%'
      height='1px'
      backgroundColor={useColorModeValue('black', 'gray.300')}
      my={3}
    />
  )
}

export default Divider

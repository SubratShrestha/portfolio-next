import { Container } from '@chakra-ui/react'

const CenteredContainer = ({ children, ...props }) => {
  return (
    <Container
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      {...props}
    >
      {children}
    </Container>
  )
}

export default CenteredContainer

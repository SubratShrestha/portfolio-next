import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CenteredContainerProps {
  children: ReactNode
  maxW: string
  height: string
}

const CenteredContainer = ({ children, ...props }: CenteredContainerProps) => {
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

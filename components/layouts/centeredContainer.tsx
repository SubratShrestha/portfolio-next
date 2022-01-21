import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CenteredContainerProps {
  children: ReactNode
  maxW: string
  height: string
  padding?: string
  align?: string
  justify?: string
}

const CenteredContainer = ({ children, align="center", justify="center", ...props }: CenteredContainerProps) => {
  return (
    <Container
      display='flex'
      flexDirection='column'
      justifyContent={justify}
      alignItems={align}
      {...props}
    >
      {children}
    </Container>
  )
}

export default CenteredContainer

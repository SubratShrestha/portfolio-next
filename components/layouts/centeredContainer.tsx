import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CenteredContainerProps {
  children: ReactNode
  maxW: string
  height?: string
  padding?: string
  align?: string
  justify?: string
  minHeight?: string
  direction?: string
  paddingTop?: string
}

const CenteredContainer = ({
  children,
  direction = 'column',
  align = 'center',
  justify = 'center',
  paddingTop = '0px',
  ...props
}: CenteredContainerProps) => {
  return (
    <Container
      paddingTop={paddingTop}
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

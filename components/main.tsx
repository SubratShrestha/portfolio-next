import Head from 'next/head'
import Navbar from './layouts/navbar'
import CenteredContainer from './layouts/centeredContainer'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Router } from 'next/router'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  router: Router
}

const Main = ({ children, router }: Props) => {
  // light, dark
  const color1 = useColorModeValue('#D3DEDC', '#202125')
  const color2 = useColorModeValue('#E9ECE6', '#27282C')
  const doubleBg = `linear-gradient(
        to right,
        ${color1} 0%,
        ${color1} 40%,
        ${color2} 40%,
        ${color2} 100%
    )`

  return (
    <Box as='main' background={{ base: color1, md: doubleBg }} height='100%'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Subrat Shrestha</title>
      </Head>

      <Navbar path={router.asPath} />
      <CenteredContainer
        maxW='container.lg'
        minHeight='100vh'
        paddingTop='55px'
      >
        {children}
      </CenteredContainer>
    </Box>
  )
}

export default Main

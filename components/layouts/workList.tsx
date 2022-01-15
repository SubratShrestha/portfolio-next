import Link from 'next/link'
import { Box, Flex, Heading, VStack, Text } from '@chakra-ui/react'
import works from '../../libs/work'
import { motion, transform } from 'framer-motion'
import { useState } from 'react'

interface workElement {
  title: string
  link: string
}

const WorkList: React.FC = () => {
  const [selected, setSelected] = useState(-1)
  const childAlign = {
    base: 'flex-start',
    md: 'flex-end'
  }
  const underlineMotion = {
    rest: {
      opacity: 0,
      ease: 'easeOut',
      duration: 0.2,
      backgroundColor: 'transparent'
    },
    hover: {
      backgroundColor: '#4FD1C5',
      opacity: 0.75,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      },
            cursor: "pointer"
    }
  }

  return (
    <Flex alignItems={childAlign} flexDirection='column'>
      <Heading as='h2' size='sm' textColor='#999' marginY='5'>
        WORK
      </Heading>
      <VStack spacing={8} align={childAlign}>
        {works.map((value: workElement, i: number) => (
          <Link href={`/${value.link}`} key={i}>
            <motion.a style={{cursor: "pointer"}} initial='rest' whileHover='hover' animate='rest'>
              <motion.div
                style={{ width: '100%', height: '10x', translateY: '-20px'}}
                variants={underlineMotion}
              />
              <Text as='h2' fontSize='3xl' fontWeight='bold'>
                {value.title}
              </Text>
            </motion.a>
          </Link>
        ))}
      </VStack>
    </Flex>
  )
}

export default WorkList

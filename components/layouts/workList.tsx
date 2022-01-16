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
      width: 0,
      ease: 'easeOut',
      duration: 0.2,
      backgroundColor: 'transparent'
    },
    hover: {
      backgroundColor: '#4FD1C5',
      width: '100%',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      },
      cursor: 'pointer'
    }
  }

  return (
    <Flex alignItems={childAlign} flexDirection='column' width={{base: "100%", md: "30%"}}>
      <Heading as='h2' size='sm' textColor='#999' marginY='5'>
        WORK
      </Heading>
      <VStack spacing={20} align={childAlign} width='100%'>
        {works.map((value: workElement, i: number) => (
          <Link href={`/${value.link}`} key={i}>
            <motion.div
              style={{ cursor: 'pointer', position: 'relative', width: '100%' }}
              initial='rest'
              whileHover='hover'
              animate='rest'
            >
              <Text
                as='h2'
                fontSize='3xl'
                fontWeight='bold'
                position='absolute'
                top={0}
                zIndex={2}
                width='100%'
                textAlign={{base: "left", md: "right"}}
              >
                {value.title}
              </Text>
              <motion.div
                style={{
                  height: '10px',
                  position: 'absolute',
                  top: 25,
                  right: 0
                }}
                variants={underlineMotion}
              />
            </motion.div>
          </Link>
        ))}
      </VStack>
    </Flex>
  )
}

export default WorkList

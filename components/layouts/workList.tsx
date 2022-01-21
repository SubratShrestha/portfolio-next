import Link from 'next/link'
import {
  Flex,
  Heading,
  VStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import works from '../../libs/work'
import { motion } from 'framer-motion'

const WorkList: React.FC = () => {
  const childAlign = {
    base: 'flex-start',
    md: 'flex-end'
  }
  // light : #4FBDBA
  const underlineMotion = {
    rest: {
      opacity: 0,
      width: 0,
      ease: 'easeOut',
      duration: 0.2,
      backgroundColor: useColorModeValue('#4FBDBA', '#35858B')
    },
    hover: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      },
      cursor: 'pointer'
    }
  }

  return (
    <Flex
      alignItems={childAlign}
      flexDirection='column'
      width={{ base: '100%', md: '30%' }}
      paddingTop={{ md: 0, base: 10 }}
    >
      <Heading as='h2' size='sm' textColor='#999' marginY='5'>
        WORK
      </Heading>
      <VStack spacing={20} minHeight='250px' align={childAlign} width='100%'>
        {Object.keys(works).map(key => (
          <Link href={`/${works[key].link}`} key={works[key].key}>
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
                textAlign={{ base: 'left', md: 'right' }}
              >
                {works[key].title}
              </Text>
              <motion.div
                style={{
                  height: '15px',
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

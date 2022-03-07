import Link from 'next/link';
import {
  Flex,
  Heading,
  VStack,
  Text,
  Link as ChakraLink,
  useColorModeValue
} from '@chakra-ui/react';
import { relevantWork } from '../libs/work';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { stagger, fadeInUp, underlineMotion } from '../libs/animations';

const WorkList: React.FC = () => {
  underlineMotion.hover.backgroundColor = useColorModeValue(
    '#4FBDBA',
    '#35858B'
  );

  return (
    <motion.div
      initial="initial"
      animate="animate"
      style={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}
    >
      <Flex
        alignItems={{ md: 'flex-end', base: 'flex-start' }}
        flexDirection="column"
        width={{ base: '100%', md: '20%' }}
        paddingTop={{ md: 0, base: 10 }}
        flex={1}
      >
        <motion.div variants={stagger} style={{ width: '100%' }}>
          <motion.div variants={fadeInUp}>
            <Heading
              as="h2"
              size="sm"
              width="100%"
              textAlign={{ md: 'right', base: 'left' }}
              textColor="#999"
              marginY="5"
            >
              RELEVANT WORK
            </Heading>
          </motion.div>
          <VStack
            spacing={20}
            minHeight="250px"
            align={{ md: 'flex-end', base: 'flex-start' }}
            width="100%"
          >
            {Object.keys(relevantWork).map(key => (
              <motion.div style={{ width: '100%' }} variants={fadeInUp}>
                <Link
                  href={relevantWork[key].link ?? ''}
                  key={relevantWork[key].key}
                >
                  <motion.div
                    style={{
                      cursor: 'pointer',
                      position: 'relative',
                      width: '100%'
                    }}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <Text
                      as="h2"
                      fontSize={{ md: '3xl', base: '2xl' }}
                      fontWeight="bold"
                      position="absolute"
                      top={0}
                      zIndex={2}
                      width="100%"
                      textAlign={{ base: 'left', md: 'right' }}
                    >
                      {relevantWork[key].title}
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
              </motion.div>
            ))}
            <motion.div variants={fadeInUp}>
              <Link href="/work">
                <ChakraLink textColor={useColorModeValue('#202023', 'gray')}>
                  View all work
                  {<ExternalLinkIcon ml={2} />}
                </ChakraLink>
              </Link>
            </motion.div>
          </VStack>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default WorkList;

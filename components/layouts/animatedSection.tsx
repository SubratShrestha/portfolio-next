import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay: number;
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition'
});

const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: '0.8', delay: `${delay}` }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default AnimatedSection;

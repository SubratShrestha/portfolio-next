import { motion } from 'framer-motion';

const AnimatedPage: React.FC = ({ children }) => {
  return (
    <motion.div style={{ width: '100%' }} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default AnimatedPage;

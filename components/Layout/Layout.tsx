import React, { FunctionComponent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 10,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;

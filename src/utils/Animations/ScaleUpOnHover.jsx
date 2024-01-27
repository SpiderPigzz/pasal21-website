import React, { useState } from "react";
import { motion } from "framer-motion";

const ScaleUpOnHover = ({ children, height }) => {
  return (
    <motion.div
      style={{ height: height }}
      whileHover={{ scale: 1.03 }}
      transition={{
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleUpOnHover;

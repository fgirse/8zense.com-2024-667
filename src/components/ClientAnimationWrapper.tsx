/* eslint-disable import/no-extraneous-dependencies */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const ClientAnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1.66 }}
          transition={{
            duration: 2.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
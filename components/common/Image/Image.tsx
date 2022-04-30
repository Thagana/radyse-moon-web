import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  src: string;
  className: string
};

export default function Image(props: Props) {
  const { src, className } = props;
  return (
    <AnimatePresence>
        <motion.img
          className={className}
          src={src}
          alt='Show Images'
          height='104'
          width='104'
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        />
    </AnimatePresence>
  );
}

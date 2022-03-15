import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    onClick(): void;
    children: string;
    type?: 'submit' | 'button',
    design?: 'primary' | 'secondary'
}


export default function Button(props: Props) {
    const {type, children, onClick, design } = props;
  return (
    <motion.button
        onClick={onClick}
        type={type}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={design}
    >
        {children}
    </motion.button>
  )
}

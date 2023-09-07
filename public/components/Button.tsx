"use client";

import React from "react";
import { motion } from "framer-motion";

type buttonProps = {
  pt: number;
  pb: number;
  pl: number;
  pr: number;
  bg: string;
  shadow?: string;
  text: string;
  onSubmit?: (e: any) => void;
};
const Button = ({
  pt,
  pb,
  pl,
  pr,
  bg,
  shadow,
  text,
  onSubmit,
}: buttonProps) => {
  return (
    <motion.button
      style={{
        backgroundColor: `${bg}`,
        boxShadow: `${shadow}`,
        paddingTop: `${pt}px`,
        paddingBottom: `${pb}px`,
        paddingLeft: `${pl}px`,
        paddingRight: `${pr}px`,
        outline: "none",
        color: "white",
        borderRadius: "10px",
        fontWeight: 700,
        letterSpacing: "0.48px",
      }}
      whileTap={{ scale: 0.8 }}
      onSubmit={onSubmit}
    >
      {text}
    </motion.button>
  );
};

export default Button;

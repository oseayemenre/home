import React from "react";
import { motion } from "framer-motion";

type inputbuttonProps = {
  pt: number;
  pb: number;
  pl: number;
  pr: number;
  bg: string;
  shadow?: string;
  text: string;
};

const InputButton = ({
  pt,
  pb,
  pl,
  pr,
  bg,
  shadow,
  text,
}: inputbuttonProps) => {
  return (
    <motion.input
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
      type='submit'
      value={text}
    />
  );
};

export default InputButton;

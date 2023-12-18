"use client";

import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

type socialMediaProps = {
  image: string;
  provider: string;
};

const SocialMedia = ({ image, provider }: socialMediaProps) => {
  const handleSubmit = async () => {
    await signIn(`${provider}`, {
      callbackUrl: "/",
    });
  };
  return (
    <div className='social'>
      <motion.button
        style={{
          paddingTop: "23px",
          paddingBottom: "23px",
          paddingLeft: "67px",
          paddingRight: "67px",
          outline: "none",
          backgroundColor: "#F5F4F8",
          borderRadius: "25px",
          display: "flex",
          gap: "10px",
        }}
        whileTap={{ scale: 0.8 }}
        onClick={handleSubmit}
        className='bg-[#1D1E1D]'
      >
        <Image
          src={image}
          alt=''
          width={25}
          height={25}
          style={{
            height: "auto",
            width: "auto",
          }}
        />
      </motion.button>
    </div>
  );
};

export default SocialMedia;

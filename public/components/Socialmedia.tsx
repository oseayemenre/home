"use client";

import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type socialMediaProps = {
  image: string;
  provider: string;
};

const SocialMedia = ({ image, provider }: socialMediaProps) => {
  const router = useRouter();

  const handleSubmit = async () => {
    await signIn(`${provider}`, {
      callbackUrl: "/",
    });
  };
  return (
    <div>
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

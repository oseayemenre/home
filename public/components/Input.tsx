"use client";

import React, { ChangeEvent } from "react";
import Image from "next/image";

type inputProps = {
  type: string;
  image: string;
  placeholder: string;
  value: string | undefined;
  index: number;
  active: number | null;
  setActive: any;
  onChange: (e: any) => void;
};

const Input = ({
  type,
  image,
  placeholder,
  value,
  onChange,
  index,
  active,
  setActive,
}: inputProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#F5F4F8",
        borderRadius: "10px",
        borderWidth: active === index ? "1.6px" : "",
        borderStyle: active === index ? "solid" : "",
        borderColor: active === index ? "#8BC83F" : "",
        paddingLeft: "16px",
        fontFamily: "Raleway",
        fontSize: "12px",
        fontWeight: 400,
        letterSpacing: "0.36px",
      }}
      onClick={() => setActive(index)}
    >
      <Image src={image} alt='' width={13} height={10} />

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={35}
        style={{
          paddingLeft: "16px",
          paddingBottom: "25px",
          paddingTop: "25px",
          backgroundColor: "#F5F4F8",
          borderRadius: "10px",
          width: "100%",
          outline: "none",
        }}
        required
      />
    </div>
  );
};

export default Input;

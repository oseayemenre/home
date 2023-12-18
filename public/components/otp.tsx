"use client";

import React, { useState, useCallback } from "react";

type otpBoxProps = {
  active: number | null;
  setActive: any;
  index: number;
};
const OtpBox = ({ active, setActive, index }: otpBoxProps) => {
  const [otp, setOtp] = useState<string>("");
  const handleOtp = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setOtp((prev) => `${prev}${e.target.value}`);
    },
    [otp]
  );

  console.log(otp);
  return (
    <input
      type='text'
      value={otp}
      onChange={handleOtp}
      maxLength={1}
      onClick={() => setActive(index)}
      style={{
        width: "74.25px",
        height: "70px",
        fontFamily: "Montserrat",
        fontWeight: 500,
        color: "#252B5C",
        letterSpacing: "0.6px",
        textAlign: "center",
        borderRadius: "10px",
        outline: "none",
        backgroundColor: "#F5F4F8",
        fontSize: "20px",
        borderWidth: active === index ? "1.6px" : "",
        borderColor: active === index ? "#234f68" : "",
        borderStyle: active === index ? "solid" : "",
      }}
    />
  );
};

export default OtpBox;

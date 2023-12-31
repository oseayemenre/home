"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OtpBox from "@/public/components/otp";
import Button from "@/public/components/Button";

const Otp = () => {
  const [active, setActive] = useState<number>(0);
  const [countdown, setCountdown] = useState<number>(30);
  const arr = [1, 2, 3, 4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
      if (countdown <= 0) {
        setCountdown(0o0);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <main className='pt-6 px-6'>
      <motion.button
        whileTap={{ scale: 0.8 }}
        className='focus:outline-none mb-[50px]'
      >
        <Link href='/register'>
          <Image src='/assets/Back - Solid.svg' alt='' width={50} height={50} />
        </Link>
      </motion.button>

      <div className='lg:w-full lg:flex lg:flex-col lg:items-center'>
        <div className='lg:w-[375px] lg:h-[555px] lg:bg-white lg:pt-[121px] lg:shadow-[0_4px_4px_rgb(0,0,0,0.25),0_2px_4px_rgb(0,0,0,0.25)] lg:relative lg:z-[40] lg:flex lg:flex lg:flex-col lg:rounded-[75px] lg:justify-start lg:-mt-[70px] lg:items-center'>
          <div className='lg:bg-white lg:w-[400px] lg:h-[100px] lg:absolute lg:-mt-[165px]' />
          <p className='text-[#252B5C] text-[25px] font-[500] tracking-[0.75px] lg:-ml-[70px] mb-5 lg:mb-[28px]'>
            Enter the <span className='text-[#234F68] font-[800]'>code</span>
          </p>
          <p className='text-[12px] font-[400] tracking-[0.36px] text-[#53587A] mb-[90px] lg:ml-[50px] lg:mb-[53px]'>
            Enter the 4 digit code that we just sent to{" "}
            <span className='text-[#252B5C] font-[600]'>
              jonathan@email.com
            </span>
          </p>

          <div className='flex justify-between gap-x-[10px] items-center text-[#252B5C] mb-[130px] lg:mb-[5px]'>
            {arr.map((items, index) => {
              return (
                <OtpBox
                  key={index}
                  active={active}
                  setActive={setActive}
                  index={index}
                />
              );
            })}
          </div>

          <div className='flex justify-center items-center mb-[20px] max-lg:hidden'>
            <div className='p-[15px] bg-[#F5F4F8] rounded-[100px] flex justify-center items-center gap-x-2 w-[90px] h-[50px]'>
              <Image
                src='/assets/Group.svg'
                alt=''
                width={13.333}
                height={16.667}
                className='mb-[2px]'
              />
              <p className='text-[#225B5C] font-[Montserrat] text-[12px] font-[500] tracking-[0.36px]'>
                {`00.${countdown < 10 ? "0" : ""}${countdown}`}
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center mb-[19px] max-lg:hidden'>
            <Link href='/login-form'>
              <Button
                pt={22}
                pb={22}
                pl={115}
                pr={116}
                bg='#8BC83F'
                text='Verify'
              />
            </Link>
          </div>

          <p className='text-[12px] text-[#53587A] font-[400] tracking-[0.36px] lg:pb-9 text-center max-lg:hidden'>
            Didn’t receive the OTP?
            <span className='text-[#1F4C6B] font-[700]'> Resend OTP</span>
          </p>

          <div className='flex justify-center items-center mb-[31px] lg:hidden'>
            <Link href='/login-form'>
              <Button
                pt={22}
                pb={22}
                pl={115}
                pr={116}
                bg='#8BC83F'
                text='Verify'
              />
            </Link>
          </div>

          <div className='flex justify-center items-center mb-[20px] lg:hidden'>
            <div className='p-[15px] bg-[#F5F4F8] rounded-[100px] flex justify-center items-center gap-x-2 w-[90px] h-[50px]'>
              <Image
                src='/assets/Group.svg'
                alt=''
                width={13.333}
                height={16.667}
                className='mb-[2px]'
              />
              <p className='text-[#225B5C] font-[Montserrat] text-[12px] font-[500] tracking-[0.36px]'>
                {`00.${countdown < 10 ? "0" : ""}${countdown}`}
              </p>
            </div>
          </div>
        </div>

        <p className='text-[12px] text-[#53587A] font-[400] tracking-[0.36px] lg:pb-9 text-center lg:hidden'>
          Didn’t receive the OTP?
          <span className='text-[#1F4C6B] font-[700]'> Resend OTP</span>
        </p>

        <Image
          src='/assets/undraw_city_life_gnpr 1.png'
          alt=''
          width={1167}
          height={279}
          className='-mt-[200px] max-xl:hidden'
          priority
        />
      </div>
    </main>
  );
};

export default Otp;

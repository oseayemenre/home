import React from "react";
import Image from "next/image";
import Button from "@/public/components/Button";
import SocialMedia from "@/public/components/Socialmedia";
import Link from "next/link";

const Home = () => {
  return (
    <main className='mt-[17px] mx-[13px] h-screen flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:gap-x-[102px] lg:h-screen '>
      <Image
        src='/assets/Mask group.svg'
        alt=''
        width={450}
        height={500}
        priority
      />

      <div className='lg:flex lg:flex-col'>
        <p className='text-center text-[#252B5C] text-[25px] font-[500] tracking-[0.75px] mb-[48px]'>
          Ready to <span className='font-[800] text-[#1F4C6B]'>explore?</span>
        </p>

        <div className='flex justify-center items-center mb-[56px]'>
          <Link href='/login-form'>
            <Button
              pt={23}
              pb={21}
              pl={68}
              pr={58}
              bg='#1D1E1D'
              text='Continue with Email'
              shadow='4px 8px 4px rgba(0,0,0,0.20)'
            />
          </Link>
        </div>

        <div className='flex justify-center items-center mb-5'>
          <Image src='/assets/Separator.png' alt='' width={327} height={22} />
        </div>

        <div className='flex justify-between items-center mb-[35px] gap-x-[10px]'>
          <SocialMedia image='/assets/Google - normal.svg' provider='google' />
          <SocialMedia
            image='/assets/Facebook - normal.svg'
            provider='facebook'
          />
        </div>

        <div className='flex justify-center items-center'>
          <Link
            href='/register'
            className='text-[12px] text-[#53587A] font-[400] tracking-[0.36px] text-center'
          >
            Don't have an account?
            <span className='text-[#1F4C6B] font-[700]'> Register</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

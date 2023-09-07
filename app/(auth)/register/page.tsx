"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Input from "@/public/components/Input";
import InputButton from "@/public/components/InputButton";
import { useRouter } from "next/navigation";

type formType = {
  fullname: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

const Register = () => {
  const router = useRouter();

  const [form, setForm] = useState<formType>({
    fullname: "",
    email: "",
    password: "",
  });

  const [showpassword, setShowPassword] = useState<boolean>(true);
  const [active, setActive] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: form.fullname,
          email: form.email,
          password: form.password,
        }),
      });

      router.push("/register-otp");
    } catch {
      console.log("Error");
    }
  };

  const inputDetails = [
    {
      type: "text",
      placeholder: "Full name",
      image: "/assets/Profile.png",
      value: form.fullname,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, fullname: e.target.value }),
    },
    {
      type: "email",
      placeholder: "Email",
      image: "/assets/Email.svg",
      value: form.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, email: e.target.value }),
    },
    {
      type: showpassword ? "password" : "text",
      placeholder: "Password",
      image: "/assets/Lock.svg",
      value: form.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, password: e.target.value }),
    },
  ];

  return (
    <main className='pt-6 px-6'>
      <motion.button
        whileTap={{ scale: 0.8 }}
        className='focus:outline-none mb-[50px]'
      >
        <Link href='/login-option'>
          <Image src='/assets/Back - Solid.svg' alt='' width={50} height={50} />
        </Link>
      </motion.button>

      <div className='lg:w-full lg:flex lg:flex-col lg:items-center'>
        <div className='lg:w-[375px] lg:h-[555px] lg:bg-white lg:shadow-[0_4px_4px_rgb(0,0,0,0.25),0_2px_4px_rgb(0,0,0,0.25)] lg:relative lg:z-[40] lg:flex lg:flex lg:flex-col lg:rounded-[75px] lg:justify-start lg:-mt-[70px] lg:items-center'>
          <div className='lg:bg-white lg:w-[400px] lg:h-[50px] lg:absolute lg:-mt-[43px]' />
          <p className='text-[#252B5C] text-[25px] font-[500] tracking-[0.75px] mb-5'>
            Create your{" "}
            <span className='text-[#234F68] font-[800]'>account</span>
          </p>
          <p className='text-[12px] font-[400] tracking-[0.36px] text-[#53587A] mb-[50px]'>
            quis nostrud exercitation ullamco laboris nisi ut
          </p>

          <form className='mb-[10px]' onSubmit={handleSubmit}>
            {inputDetails.map((items, index) => {
              return (
                <div className='mb-[15px]' key={index}>
                  <Input
                    active={active}
                    setActive={setActive}
                    index={index}
                    type={items.type}
                    placeholder={items.placeholder}
                    image={items.image}
                    value={items.value}
                    onChange={items.onChange}
                  />
                </div>
              );
            })}

            <div className='flex justify-between items-center font-[600] tracking-[0.36px] text-[12px] text-[#234F68] mb-[54px]'>
              <p className='cursor-pointer'>Terms of service</p>
              <p
                onClick={() => setShowPassword(!showpassword)}
                className='cursor-pointer'
              >
                {showpassword ? "Show password" : "Hide password"}
              </p>
            </div>

            <div className='flex justify-center items-center'>
              <InputButton
                pt={22}
                pb={22}
                pl={108}
                pr={108}
                bg='#8BC83F'
                text='Register'
              />
            </div>
          </form>
        </div>

        <Image
          src='/assets/undraw_city_life_gnpr 1.png'
          alt=''
          width={1167}
          height={279}
          className='-mt-[200px] max-md:hidden'
          priority
        />
      </div>
    </main>
  );
};

export default Register;

"use client";

import React from "react";
import Image from "next/image";
import Input from "@/public/components/Input";
import InputButton from "@/public/components/InputButton";
import SocialMedia from "@/public/components/Socialmedia";
import Link from "next/link";
import { signIn, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

type formType = {
  email: string | undefined;
  password: string | undefined;
};

const loginForm = () => {
  const [form, setForm] = React.useState<formType>({
    email: "",
    password: "",
  });

  const [incorrect, setIncorrect] = React.useState<boolean>(false);
  const [showpassword, setShowPassword] = React.useState<boolean>(true);
  const [active, setActive] = React.useState<number | null>(null);

  React.useEffect(() => {
    const response = async () => {
      const data = await getProviders();
      console.log(data);
    };

    response();
  }, []);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/");
    } catch {
      console.log("Error");
    }
  };

  const inputDetails = [
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
    <main>
      <Image
        src='/assets/undraw_city_life_gnpr 1.svg'
        alt=''
        width={408}
        height={175}
        className='mb-1'
        priority
      />

      <div className='mx-6 mb-[46px]'>
        <p className='text-[#252B5C] text-[25px] font-[500] tracking-[0.75px] mb-[15px]'>
          Let's
          <span className='text-[#1F4C6B] text-[25px] font-[800]'>
            {" "}
            Sign In
          </span>
        </p>
        <p className='text-[#53587A] text-[12px] font-[400] tracking-[0.36px] mb-[41px]'>
          quis nostrud exercitation ullamco laboris nisi ut
        </p>
        {incorrect && (
          <p className='text-[10px] text-[#FA7979] font-[400] tracking-[0.3px] mb-2'>
            Incorrect password for this account
          </p>
        )}
        <form
          className='flex flex-col gap-y-[15px] mb-[10px]'
          onSubmit={handleSubmit}
        >
          {inputDetails.map((items, index) => {
            return (
              <Input
                key={index}
                active={active}
                setActive={setActive}
                index={index}
                type={items.type}
                placeholder={items.placeholder}
                image={items.image}
                value={items.value}
                onChange={items.onChange}
              />
            );
          })}

          <div className='flex justify-between items-center font-["Raleway"] font-[600] tracking-[0.36px] text-[12px] text-[#1F4C6B] mb-[35px]'>
            <p>Forgot password?</p>
            <p onClick={() => setShowPassword(!showpassword)}>
              {showpassword ? "Show password" : "Hide password"}
            </p>
          </div>

          <div className='flex justify-center items-center mb-[30px]'>
            <InputButton
              pt={22}
              pb={22}
              pl={118}
              pr={118}
              bg={
                form.email === "" && form.password === ""
                  ? "rgba(139, 200, 63, 0.40)"
                  : "#8BC83F"
              }
              text='Login'
            />
          </div>
        </form>

        <div className='flex justify-center items-center mb-5'>
          <Image src='/assets/Separator.png' alt='' width={327} height={22} />
        </div>

        <div className='flex justify-between items-center mb-[25px] gap-x-[10px]'>
          <SocialMedia image='/assets/Google - normal.svg' provider='google' />
          <SocialMedia
            image='/assets/Facebook - normal.svg'
            provider='facebook'
          />
        </div>

        <div className='flex flex-col justify-center items-center gap-y-[7px]'>
          <Link
            href='/register'
            className='text-[12px] text-[#53587A] font-[Raleway] font-[400] tracking-[0.36px] text-center'
          >
            Don't have an account?
            <span className='text-[#1F4C6B] font-[700]'> Register</span>
          </Link>

          <p className='text-[18px] text-[#1F4C6B] font-[800] tracking-[0.54px]'>
            FAQ <span className='font-[400]'>&</span> Support
          </p>
        </div>
      </div>
    </main>
  );
};

export default loginForm;

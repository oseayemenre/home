"use client";

import React, { useState, useEffect, Children } from "react";
import { signOut, useSession } from "next-auth/react";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

const Page = () => {
  const session = useSession();

  console.log(session);

  const { setTheme } = useTheme();

  return (
    <main>
      <FiMoon size={25} cursor='pointer' onClick={() => setTheme("light")} />
      <BsSun size={25} cursor='pointer' onClick={() => setTheme("dark")} />
      <button className='bg-blue-300 dark:bg-red-200' onClick={() => signOut()}>
        page
      </button>
    </main>
  );
};

export default Page;

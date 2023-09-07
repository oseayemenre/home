"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const session = useSession();

  console.log(session);

  return (
    <button className='bg-red-500' onClick={() => signOut()}>
      page
    </button>
  );
};

export default page;

"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

const Page = () => {
  const session = useSession();

  console.log(session);

  return (
    <main>
      <button className='bg-blue-300 dark:bg-red-200' onClick={() => signOut()}>
        page
      </button>
    </main>
  );
};

export default Page;

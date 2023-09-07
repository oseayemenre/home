"use client";

import { SessionProvider } from "next-auth/react";

type authProviderProps = {
  children: React.ReactNode;
};

const authProvider = ({ children }: authProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default authProvider;

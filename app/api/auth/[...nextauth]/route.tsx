import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { prismadb } from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const authoptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),

    CredentialProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Input Credentials");
        }

        const user = await prismadb.user?.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user || !user.password) {
          throw new Error("User doesn't exist");
        }

        const correctPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!correctPassword) {
          throw new Error("Input correct password");
        }

        return user;
      },
    }),
  ],

  adapter: PrismaAdapter(prismadb),

  pages: {
    signIn: "/login-form",
    error: "/login-form",
    signOut: "/login-option",
  },

  debug: process.env.NODE_ENV === "development",

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };

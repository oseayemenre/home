import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prismadb } from "@/lib/prismadb";

type errorProps = {
  err: {
    message: string;
  };
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prismadb.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err: errorProps | any) {
    return new NextResponse(err.message, { status: 500 });
  }
};

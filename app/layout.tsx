import { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/public/components/AuthProvider";

type lato = {
  subsets: string;
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

type RootLayoutProp = {
  children: React.ReactNode;
};

const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

const RootLayout = ({ children }: RootLayoutProp) => {
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={lato.className}>{children}</body>
      </AuthProvider>
    </html>
  );
};

export default RootLayout;

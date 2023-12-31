import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cliff | Personal Portfolio",
  description:
    "Cliff produces great full-stack websites in 2023 and beyond",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-[5000px] ${inter.className} bg-gray-50 text-gray-950 relative`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-5rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded- blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 right-[-35rem] h-[31.25rem] w-[31.25rem] rounded- blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}

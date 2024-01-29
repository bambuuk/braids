import type { Metadata } from "next";
import { outfit, raleway } from "@/assets/fonts";
import "./globals.css";
import { fullWidthClassName } from "react-remove-scroll-bar";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Braid Space",
  description: "Braids for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(`${outfit.variable} ${raleway.variable}`, 'bg-[#eeeeee] w-full h-full border-box')}
      >
        {children}
      </body>
    </html>
  );
}

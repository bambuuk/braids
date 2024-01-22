import type { Metadata } from "next";
import { outfit, raleway } from "@/assets/fonts";
import "./globals.css";

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
    <html lang="en">
      <body className={`${outfit.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}

import { Outfit, Raleway } from "next/font/google";

export const outfit = Outfit({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const raleway = Raleway({
  weight: ["600", "300"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

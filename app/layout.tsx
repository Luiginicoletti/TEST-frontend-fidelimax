import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fidelimax",
  description: "Fidelimax front-end test",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-light-background`}>
        <Navbar />
        <Hero />
        <Main />
        {children}
        <Footer />
      </body>
    </html>
  );
}

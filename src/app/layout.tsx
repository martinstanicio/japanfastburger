import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Birthstone } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

import "./globals.css";

const bodyFont = Inter({ subsets: ["latin"] });
const scriptFont = Birthstone({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Japan Fast Burger",
  description: "Smash Burger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "dark grid min-h-screen grid-rows-[auto_1fr_auto] antialiased",
          bodyFont.className,
          scriptFont.variable,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

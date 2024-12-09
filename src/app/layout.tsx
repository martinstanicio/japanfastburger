import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const bodyFont = Inter({ subsets: ["latin"] });

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
      <body className={`${bodyFont.className} antialiased`}>{children}</body>
    </html>
  );
}

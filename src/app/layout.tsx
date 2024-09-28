import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "./component/navbar/navbar";
import { Providers } from "./provider";
import NavbarWrapper from "./path/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Secure Blockchain Voting System",
  description: "A decentralized and transparent voting platform leveraging blockchain technology to ensure secure, anonymous, and verifiable elections.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarWrapper/>
        <main> 
          <Providers>

        {children}
          </Providers>

        </main>
      </body>
    </html>
  );
}

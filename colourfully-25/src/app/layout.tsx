import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colourfully - TJMB",
  description: "Get the basic colour scheme from a photo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
      >
        <Navbar/>
        {children}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-black text-white h-40">
        <p>© {new Date().getFullYear()} Colourfully</p>
      </footer>
      </body>
    </html>
  );
}

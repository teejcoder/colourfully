import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedOut,
} from '@clerk/nextjs'

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
  keywords: ["colour palette", "image analysis", "AI tools", "photo colors"],
  authors: [{name: "TJMB"}],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://colourfully.vercel.app",
  },
  openGraph: {
    title: "Colourfully - TJMB",
    description: "Get the basic colour scheme from a photo.",
    url: "https://colourfully.tjmb.dev",
    images: [
      {
        url: "/prod-ss.png",
        width: 1200,
        height: 630,
        alt: "Colourfully Screenshot",
      },
    ],
    siteName: "Colourfully",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colourfully - TJMB",
    description: "Get the basic colour scheme from a photo.",
    images: ["/prod-ss.png"],
  },
  themeColor: "#000000",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
          </header>
          <Navbar/>
            {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}

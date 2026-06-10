import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import './globals.css';
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Resonance",
    template: "%s | Resonance"
  },
  description: "AI-powered text-to-speech and voice cloning platform",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Bebas_Neue } from 'next/font/google';
import { Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: "--font-bebasNeue",
  weight: '400', 
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "K70",
  description: "70 years completion of climbing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${beVietnamPro.className} antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow mt-[4rem] md:mt-[9rem]">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

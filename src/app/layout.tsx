import type { Metadata } from "next";
import { Bebas_Neue } from 'next/font/google';
import { Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";

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
        className={`${bebasNeue.variable} ${beVietnamPro.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

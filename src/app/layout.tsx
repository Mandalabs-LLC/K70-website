import type { Metadata } from "next";
import { Bebas_Neue } from 'next/font/google';
import { Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { socialMediaIcons } from "@/data/socialMediaData";
import { SocialIcon } from "react-social-icons";
import { Suspense } from "react";

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
    icons: {
        icon: "/logo.png",
      }
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
                <Navbar />
                {/* Main content */}
                <Suspense fallback={<div>Loading...</div>}>
                    <main className="flex-grow overflow-x-hidden">
                        <div className="h-auto w-auto bg-white space-y-4 fixed top-[40vh] right-0 z-50 px-1 py-3 md:px-3 md:py-4">
                            {socialMediaIcons.map((Icon, index) => (
                                <div key={index}>
                                    <SocialIcon url={Icon.href} network={Icon.icon} style={{ height: 40, width: 40 }} target="_blank" />
                                </div>
                            ))}
                        </div>
                        {children}
                    </main>
                </Suspense>

                {/* Footer */}
                <Footer />
            </body>
        </html>
    );
}

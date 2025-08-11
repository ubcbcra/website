import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Public_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans", weight: ["400", "500", "700", "900"] });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans", weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "UBC BCRA",
  description: "Brock Commons Residence Association",
  other: {
    'developer': 'Akshat Kalra',
    'developer-role': 'VP Internal',
    'developer-github': 'https://github.com/Akshat-Kalra'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Website designed & built by Akshat Kalra (VP Internal) - https://github.com/Akshat-Kalra */}
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} ${publicSans.variable} antialiased`}>
        <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Navbar />
            {children}
            <footer className="mt-auto px-6 py-8 text-center text-xs text-[#637588] border-t border-[#dce0e5]">
              <div className="flex flex-col gap-3 items-center justify-center">
                <p className="text-[#637588] text-base font-normal leading-normal">
                  © 2025 Brock Commons Residence Association. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panta Website",
  description: "Demo website Panta",
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
        <Header />
        <div className="max-lg:mt-[67px] max-xs:mt-[60px] mt-[83px]">
          {children}
        </div>
        <div className="bg-secondary border-t border-button">
          <div className='max-w-[1128px] mx-auto py-10 text-text max-xs:py-5'>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

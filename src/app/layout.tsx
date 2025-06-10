import "./globals.css";
import type { Metadata } from "next";
import AppProviders from "./providers";
import { Geist, DM_Sans } from "next/font/google";
import { AppNavbar } from "@/components/custom/nav-bar";
import Footer from "@/components/custom/footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Minds | AahrbitX",
  description: "A community by AahrbitX for open minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${dmSans.variable} antialiased `}>
        <AppNavbar />
        <AppProviders>{children}</AppProviders>
        <div className="fixed inset-0 -z-10 h-screen w-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <Footer />
      </body>
    </html>
  );
}

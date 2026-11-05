import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb | Find your kind of getaway",
  description:
    "Discover extraordinary homes and thoughtfully hosted stays across Canada. An independent Airbnb interface study.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full pb-20 md:pb-0">
        {children}
        <Footer />
        <Suspense fallback={null}>
          <MobileNav />
        </Suspense>
      </body>
    </html>
  );
};
export default RootLayout;

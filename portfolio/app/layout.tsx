import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shreyam Kundu | Portfolio",
  description:
    "Software developer specializing in React, Node.js, and cloud technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-black text-white/90 selection:bg-emerald-500/30 selection:text-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./(public)/_components/navbar";
import FooterNav from "./(public)/_components/footerNav";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication using Auth.js",
  description: " Authentication using auth.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <Toaster />
          <main
            className={cn(
              " h-[calc(100vh-100px)] fixed top-[50px] w-full bg-gradient"
            )}
          >
            {children}
          </main>
          <FooterNav />
        </body>
      </html>
    </SessionProvider>
  );
}

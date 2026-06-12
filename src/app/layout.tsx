import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TechZen | Building Digital Products That Drive Growth",
  description: "TechZen is a premium software development agency specializing in custom software, web development, mobile apps, and UI/UX design.",
  keywords: ["software development", "web development", "mobile apps", "UI/UX design", "digital agency", "tech agency"],
  openGraph: {
    title: "TechZen | Building Digital Products That Drive Growth",
    description: "Premium software development agency specializing in custom software, web development, mobile apps, and UI/UX design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[var(--color-accent)] selection:text-white relative">
        <Navbar />
        <main className="flex-grow flex flex-col pt-24">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

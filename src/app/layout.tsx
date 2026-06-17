import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { ClientSuccessWidget } from "@/components/ui/ClientSuccessWidget";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieConsent } from "@/components/ui/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ReInformTech | Custom Software, AI Automation & SaaS Development",
  description: "We help startups & businesses automate operations, reduce costs, and grow faster through custom software, AI solutions, and SaaS development. Get a free estimate today.",
  keywords: ["custom software development", "MVP development", "AI automation", "SaaS development", "business automation", "ERP development", "startup software", "web development India", "app development Noida"],
  authors: [{ name: "ReInformTech" }],
  verification: {
    google: "FTtB_ccROSBZFkT_z_vDEbKfQ6ubsZdsv9URJUdJCs8",
  },
  openGraph: {
    title: "ReInformTech | Custom Software, AI Automation & SaaS Development",
    description: "We help startups & businesses automate operations and grow faster through custom software and AI solutions.",
    type: "website",
    locale: "en_US",
    siteName: "ReInformTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReInformTech | Custom Software & AI Solutions",
    description: "Custom software, AI automation & SaaS development for growing businesses. Get a free estimate.",
    creator: "@Reinformtech",
    site: "@Reinformtech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[var(--color-text)] selection:text-[var(--color-background)] relative" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

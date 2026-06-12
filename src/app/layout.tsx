import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TechZen | Enterprise Software Solutions & Digital Products",
  description: "TechZen builds high-performance, scalable software solutions for startups and enterprises. Specializing in custom web development, mobile apps, and enterprise SaaS.",
  keywords: ["enterprise software", "custom software development", "SaaS development", "web development", "mobile apps", "UI/UX design", "tech agency"],
  authors: [{ name: "TechZen" }],
  openGraph: {
    title: "TechZen | Enterprise Software Solutions",
    description: "Building scalable digital products that drive enterprise growth. Custom software, SaaS platforms, and mobile applications.",
    type: "website",
    locale: "en_US",
    siteName: "TechZen",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechZen | Enterprise Software Solutions",
    description: "Building scalable digital products that drive enterprise growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[var(--color-text)] selection:text-[var(--color-background)] relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow flex flex-col pt-24">{children}</main>
          <Footer />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { ClientSuccessWidget } from "@/components/ui/ClientSuccessWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";

export const dynamic = "force-dynamic";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col pt-20">{children}</main>
      <Footer />
      <FloatingContact />
      <ClientSuccessWidget />
      <CookieConsent />
    </>
  );
}

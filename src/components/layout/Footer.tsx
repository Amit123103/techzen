"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2 } from "lucide-react";

const footerNavigation = {
  services: [
    { name: "MVP Development", href: "/solutions/enterprise-saas" },
    { name: "Business Automation", href: "/solutions/cloud-architecture" },
    { name: "AI Solutions", href: "/solutions/ai-automation" },
    { name: "UI/UX Design", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Careers", href: "/careers" },
    { name: "Our Team", href: "/#team" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/#contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://x.com/Reinformtech",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61590954721577",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/131924402/admin/dashboard/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCm-dQf6VkOxQ_hMgrm2LeCg",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
          <path d="m10 15 5-3-5-3z"/>
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://discord.gg/NHRSFUSAu",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.4189 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.4189 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/reinformtech/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
    },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus("success");
        setEmail("");
        // Reset after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-24 pb-8">
      <Container>
        <div className="xl:grid xl:grid-cols-4 xl:gap-12">
          
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white flex-shrink-0 shadow-sm ring-1 ring-black/10">
                <img src="/logo-icon.png" alt="ReInformTech" className="h-full w-full object-contain p-0.5" />
              </div>
              <div className="text-[21px] font-extrabold tracking-tight">
                <span className="text-[var(--color-text)]">ReInform</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D65A7C] to-[#FF8C69]">Tech</span>
              </div>
            </Link>
            <p className="text-sm leading-6 text-[var(--color-muted)] max-w-xs">
              We help schools, startups, and businesses automate operations, reduce costs, and grow faster through custom software and AI solutions.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--color-text)]">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--color-text)]">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--color-text)]">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--color-text)]">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 xl:mt-0 xl:col-span-1">
            <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--color-text)] mb-6">Subscribe to our newsletter</h3>
            <p className="text-sm text-[var(--color-muted)] mb-4">
              Get the latest insights on enterprise software architecture and engineering leadership.
            </p>
            <form onSubmit={handleSubscribe} className="mt-2 sm:flex sm:max-w-md xl:max-w-none flex-col gap-3">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="w-full min-w-0 appearance-none rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-base text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all disabled:opacity-50"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:shrink-0">
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={status === "loading" || status === "success"}
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                  ) : status === "success" ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Subscribed!
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
              {status === "error" && (
                <p className="text-xs text-red-500 mt-1">Failed to subscribe. Please try again.</p>
              )}
            </form>
          </div>
          
        </div>
        
        <div className="mt-16 border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm leading-5 text-[var(--color-muted)] font-medium">
            &copy; {new Date().getFullYear()} ReInformTech Enterprise. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-medium text-[var(--color-muted)]">
            <span className="flex items-center gap-2">Built for scale. Designed for humans.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookie Policy | ReInformTech",
  description: "Information about how ReInformTech uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-24 bg-[var(--color-background)] min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)] mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm text-[var(--color-muted)]">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="space-y-10 text-[var(--color-text)]">
            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">1</span>
                What are cookies?
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">2</span>
                How do we use cookies?
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                We use cookies to understand how you interact with our website, to remember your preferences, and to improve your user experience. The cookies we use can be categorized as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3 text-[var(--color-muted)] marker:text-[#D65A7C]">
                <li><strong className="text-[var(--color-text)]">Strictly Necessary Cookies:</strong> These are essential for you to browse the website and use its features.</li>
                <li><strong className="text-[var(--color-text)]">Performance Cookies:</strong> These cookies collect information about how you use our websites, such as which pages you visit most often.</li>
                <li><strong className="text-[var(--color-text)]">Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as your user name, language, or region).</li>
                <li><strong className="text-[var(--color-text)]">Targeting Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests.</li>
              </ul>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">3</span>
                Managing your cookies
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
              </p>
              <p className="leading-relaxed text-[var(--color-muted)] mt-4">
                Please note that if you choose to disable cookies, it may affect how our website works. Some features may not be available to you.
              </p>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">4</span>
                Updates to this Policy
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                We may update this Cookie Policy from time to time. If we make significant changes, we will let you know but please regularly check this policy to ensure you are aware of the most updated version.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

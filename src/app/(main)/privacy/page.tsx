import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | ReInformTech",
  description: "Privacy Policy and data protection guidelines for ReInformTech.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 bg-[var(--color-background)] min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--color-muted)]">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="space-y-10 text-[var(--color-text)]">
            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">1</span>
                Introduction
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                At ReInformTech, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website, use our services, and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">2</span>
                The Data We Collect About You
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3 text-[var(--color-muted)] marker:text-[#D65A7C]">
                <li><strong className="text-[var(--color-text)]">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong className="text-[var(--color-text)]">Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong className="text-[var(--color-text)]">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong className="text-[var(--color-text)]">Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">3</span>
                How We Use Your Personal Data
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3 text-[var(--color-muted)] marker:text-[#D65A7C]">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">4</span>
                Cookies and Tracking
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. We use cookies primarily for analytical and performance purposes to enhance your experience. 
              </p>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">5</span>
                Contact Us
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                If you have any questions about this privacy policy or our privacy practices, please feel free to reach out to our team via the contact form on our homepage.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

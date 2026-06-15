import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service | ReInformTech",
  description: "Terms of Service and usage conditions for ReInformTech.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-24 bg-[var(--color-background)] min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)] mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-[var(--color-muted)]">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="space-y-10 text-[var(--color-text)]">
            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">1</span>
                Agreement to Terms
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">2</span>
                Use License
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                Permission is granted to temporarily download one copy of the materials (information or software) on ReInformTech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="leading-relaxed text-[var(--color-muted)] mt-4">
                Under this license, you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3 text-[var(--color-muted)] marker:text-[#D65A7C]">
                <li><strong className="text-[var(--color-text)]">Modify or copy</strong> the materials.</li>
                <li><strong className="text-[var(--color-text)]">Use the materials</strong> for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                <li><strong className="text-[var(--color-text)]">Attempt to decompile or reverse engineer</strong> any software contained on ReInformTech's website.</li>
                <li><strong className="text-[var(--color-text)]">Remove any copyright</strong> or other proprietary notations from the materials.</li>
              </ul>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">3</span>
                Disclaimer
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                The materials on ReInformTech's website are provided on an 'as is' basis. ReInformTech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">4</span>
                Limitations
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                In no event shall ReInformTech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ReInformTech's website, even if ReInformTech or a ReInformTech authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D65A7C]/10 text-[#D65A7C] text-sm">5</span>
                Revisions and Errata
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                The materials appearing on ReInformTech's website could include technical, typographical, or photographic errors. ReInformTech does not warrant that any of the materials on its website are accurate, complete or current. ReInformTech may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

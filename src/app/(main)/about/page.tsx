import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Team } from "@/components/sections/Team";
import { AnimatedLine } from "@/components/ui/AnimatedLine";

export const metadata: Metadata = {
  title: "About Us | ReInformTech Enterprise",
  description: "Learn about ReInformTech's journey, our mission to build practical digital solutions, and the team behind our enterprise software.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 pb-0">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-surface)]">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[var(--color-text)]">
              We build software that powers modern enterprises.
            </h1>
            <p className="text-xl text-[var(--color-muted)] leading-relaxed">
              ReInformTech started with a small team of developers passionate about building practical, scalable digital solutions for startups and global enterprises. Today, we are a collective of engineers, designers, and strategists dedicated to technical excellence.
            </p>
          </div>
        </Container>
      </section>

      <AnimatedLine />

      {/* Founder Story & Mission */}
      <section className="py-24 bg-[var(--color-background)]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Our Story" 
                eyebrow="The Journey" 
                align="left"
              />
              <div className="prose prose-lg dark:prose-invert text-[var(--color-muted)] mt-6 space-y-6">
                <p>
                  In 2018, we noticed a recurring problem: ambitious companies were being held back by outdated legacy systems and bloated agency processes. ReInformTech was founded with a simple premise: engineering teams should focus on delivering pure business value through elegant code.
                </p>
                <p>
                  What started in a small co-working space has evolved into a global remote-first team. We don&apos;t just write code; we partner with our clients to architect systems that are resilient, scalable, and beautifully designed.
                </p>
                <div className="pl-6 border-l-4 border-[var(--color-accent)] mt-8 py-2">
                  <p className="font-semibold text-lg text-[var(--color-text)] italic">
                    &quot;Our goal has never been to be the biggest agency, but to be the team that companies trust with their most complex technical challenges.&quot;
                  </p>
                  <p className="text-sm mt-2 font-medium uppercase tracking-wider">— Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
               <span className="text-[var(--color-muted)] text-sm uppercase tracking-widest font-semibold">[Office Culture Image]</span>
            </div>
          </div>
        </Container>
      </section>

      <AnimatedLine />

      {/* Timeline / Milestones */}
      <section className="bg-[var(--color-surface)] py-24">
        <Container>
          <SectionHeading 
            title="Milestones" 
            eyebrow="Our Evolution" 
          />
          <div className="max-w-4xl mx-auto mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-border)] before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-accent)] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 text-sm">
                &apos;18
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm">
                <h3 className="font-bold text-lg mb-1 text-[var(--color-text)]">Inception</h3>
                <p className="text-[var(--color-muted)]">Founded in a small office with just 3 engineers.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-accent)] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 text-sm">
                &apos;20
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm">
                <h3 className="font-bold text-lg mb-1 text-[var(--color-text)]">Going Global</h3>
                <p className="text-[var(--color-muted)]">Transitioned to a remote-first model and expanded our client base across Europe and North America.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-accent)] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 text-sm">
                &apos;23
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm">
                <h3 className="font-bold text-lg mb-1 text-[var(--color-text)]">Enterprise Era</h3>
                <p className="text-[var(--color-muted)]">Launched dedicated enterprise architecture division and partnered with Fortune 500 companies.</p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <AnimatedLine />

      {/* Team Section */}
      <div className="py-24 bg-[var(--color-background)]">
        <Team />
      </div>
    </div>
  );
}

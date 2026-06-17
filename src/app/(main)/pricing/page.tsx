import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | ReInformTech – Transparent Software Development Pricing",
  description: "Get transparent pricing for custom software development, business automation, and AI solutions. MVP starts at ₹50,000. Get a free estimate today.",
};

const plans = [
  {
    name: "MVP Starter",
    price: "₹50,000",
    priceNote: "Starting from",
    description: "Perfect for startups validating an idea. Get a working MVP in 4–8 weeks.",
    ideal: "Startups & Solo Founders",
    features: [
      "Custom web or mobile app",
      "Up to 5 core features",
      "Responsive UI/UX design",
      "Basic admin dashboard",
      "Deployment on cloud (Vercel/AWS)",
      "2 weeks post-launch support",
      "Source code ownership",
    ],
    cta: "Get Started",
    highlighted: false,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Business Automation",
    price: "₹1,50,000",
    priceNote: "Custom quote",
    description: "End-to-end automation for growing businesses. Replace spreadsheets with custom software.",
    ideal: "Schools, SMBs & Growing Teams",
    features: [
      "Everything in MVP Starter",
      "Custom ERP / CRM system",
      "Workflow automation",
      "Third-party integrations",
      "Real-time analytics dashboard",
      "Role-based access control",
      "1 month post-launch support",
      "Training & documentation",
    ],
    cta: "Get Custom Quote",
    highlighted: true,
    gradient: "from-rose-500 to-orange-500",
  },
  {
    name: "Dedicated Team",
    price: "₹80,000",
    priceNote: "Per month",
    description: "Hire our full-stack team as your extended engineering department.",
    ideal: "Funded Startups & Enterprises",
    features: [
      "Dedicated dev team (2–4 engineers)",
      "Daily standups & weekly demos",
      "Flexible scope & sprints",
      "Full-stack development",
      "DevOps & CI/CD pipeline",
      "Architecture & code reviews",
      "Priority support channel",
      "NDA & IP protection",
    ],
    cta: "Book a Call",
    highlighted: false,
    gradient: "from-violet-500 to-purple-600",
  },
];

const faqs = [
  {
    q: "How accurate are these prices?",
    a: "These are starting ranges. Every project is different, so we provide a detailed custom quote after understanding your requirements during a free consultation call.",
  },
  {
    q: "Do I own the source code?",
    a: "Yes, 100%. You own all the code, designs, and assets we create for you. We transfer everything upon project completion.",
  },
  {
    q: "What technologies do you use?",
    a: "We primarily work with React, Next.js, Node.js, Python, PostgreSQL, Supabase, and deploy on AWS, Vercel, or Cloudflare depending on project needs.",
  },
  {
    q: "Can I start small and scale later?",
    a: "Absolutely. Most clients start with the MVP Starter plan and upgrade as their business grows. We architect everything for scalability from day one.",
  },
  {
    q: "What if I need something not listed here?",
    a: "No problem. These plans are templates — we customize everything to fit your specific needs. Just reach out and we'll build a custom proposal.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We typically work with a 40-30-30 payment structure: 40% upfront, 30% at midpoint, and 30% on delivery. Flexible arrangements are available.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading
            title="Simple, Transparent Pricing"
            eyebrow="Plans & Pricing"
            description="No hidden fees. No surprises. Choose a plan that fits your needs, or get a custom quote for your specific project."
            align="center"
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.highlighted
                  ? "border-[var(--color-accent)] shadow-lg scale-[1.02]"
                  : "border-[var(--color-border)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-[var(--color-accent)] text-white text-center text-xs font-bold uppercase tracking-wider py-1.5">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.gradient} p-8 ${plan.highlighted ? "pt-10" : ""}`}>
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-white/70 text-sm mb-4">{plan.ideal}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-white/60 text-sm">+</span>
                </div>
                <p className="text-white/50 text-xs mt-1">{plan.priceNote}</p>
              </div>

              {/* Body */}
              <div className="p-8 bg-[var(--color-surface)] flex flex-col flex-grow">
                <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--color-text)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={`w-full text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlighted
                      ? "bg-[var(--color-accent)] text-white hover:opacity-90"
                      : "bg-[var(--color-text)] text-[var(--color-background)] hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">Frequently Asked Questions</h2>
            <p className="text-[var(--color-muted)]">Everything you need to know before getting started.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{faq.q}</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-[var(--color-background)] border border-[var(--color-border)] rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">Not sure which plan is right?</h3>
          <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
            Book a free 30-minute strategy call. We&apos;ll understand your requirements and recommend the best approach.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-text)] text-[var(--color-background)] font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Book Free Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

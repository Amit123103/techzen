import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Code2, Smartphone, Layout, Cloud, Bot, Palette } from "lucide-react";

const services = [
  {
    title: "Custom Software",
    description: "We build software that actually works the way your team does. No bloated features, just tools designed to fix your specific bottlenecks.",
    icon: Code2,
  },
  {
    title: "Web Development",
    description: "Fast, reliable websites built with modern tools. We focus on clean code so your site stays quick and doesn't break.",
    icon: Layout,
  },
  {
    title: "Mobile App Development",
    description: "Apps that your customers will actually enjoy using, whether they're on an iPhone or an Android.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "We design interfaces that make sense. If your users need a manual to figure out your software, we haven't done our job.",
    icon: Palette,
  },
  {
    title: "Cloud Solutions",
    description: "We set up your servers and infrastructure so they don't crash when you finally get that big spike in traffic.",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    description: "We write scripts to handle the boring, repetitive tasks so your team can focus on the real work.",
    icon: Bot,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--color-background)]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Our Services"
            title="What we do best"
            description="We don't do everything, but what we do, we do really well. Here's how we can help you build your next idea."
            className="mb-16"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variants={staggerContainer}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} variants={fadeUp}>
                <Card className="h-full group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

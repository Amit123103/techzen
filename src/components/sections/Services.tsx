import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Code2, Smartphone, Layout, Cloud, Bot, Palette } from "lucide-react";

const services = [
  {
    title: "Custom Software",
    description: "Enterprise-grade applications built from scratch to solve your unique business challenges with scalable architecture.",
    icon: Code2,
  },
  {
    title: "Web Development",
    description: "High-performance web applications using modern frameworks like React and Next.js for seamless user experiences.",
    icon: Layout,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users on iOS and Android devices.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Human-centered design that creates intuitive, beautiful interfaces focused on conversion and usability.",
    icon: Palette,
  },
  {
    title: "Cloud Solutions",
    description: "Robust cloud infrastructure and migration services using AWS, Azure, or Google Cloud for ultimate reliability.",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    description: "Intelligent systems that streamline operations, reduce manual work, and unlock new capabilities.",
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
                    <CardDescription className="text-base">
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

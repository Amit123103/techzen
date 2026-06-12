import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Globe, MessageSquare, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Amit",
    role: "CEO & Founder",
    bio: "Former senior engineer turned founder. Passionate about building products that solve real business problems without the enterprise bloat.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    bio: "Full-stack architect with a love for clean code and fast performance. When she's not coding, she's probably building mechanical keyboards.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marcus Johnson",
    role: "Product Designer",
    bio: "Obsessed with typography and whitespace. Marcus ensures that everything we build not only works perfectly, but looks beautiful doing it.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export function Team() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind the code"
            description="We're a small, tight-knit group of builders. No account managers or bloated hierarchies—you work directly with the people building your product."
            align="center"
            className="mb-16"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variants={staggerContainer}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <AnimateOnScroll key={member.name} variants={fadeUp} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] border border-[var(--color-border)] shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay at bottom for social links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4 text-white">
                      <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><Globe className="w-5 h-5" /></a>
                      <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><MessageSquare className="w-5 h-5" /></a>
                      <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">{member.name}</h3>
                  <p className="text-[var(--color-accent)] font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed text-balance">
                    {member.bio}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

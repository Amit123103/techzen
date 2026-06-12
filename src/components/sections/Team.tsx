import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Amit Patel",
    role: "CEO & Chief Architect",
    bio: "Former enterprise systems engineer. Amit founded TechZen with a vision to build scalable, resilient architectures for companies outgrowing their initial tech stacks.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["System Architecture", "Cloud Native", "Business Strategy"],
  },
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    bio: "10+ years of experience leading cross-functional teams. Sarah specializes in migrating monolithic systems to performant microservices.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Go", "Kubernetes", "Team Leadership"],
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product Design",
    bio: "Award-winning designer with a focus on enterprise UX. Marcus ensures complex data is presented in intuitive, beautiful interfaces.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["UI/UX", "Design Systems", "User Research"],
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Frontend Engineer",
    bio: "React core contributor and performance obsessed. Elena builds the lightning-fast interfaces that our clients' users love.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["React", "TypeScript", "Web Vitals"],
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Our Leadership"
            title="Engineers, not just managers."
            description="Our leadership team actively writes code, designs architectures, and ships products. You work directly with the experts."
            align="center"
            className="mb-16"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variants={staggerContainer}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <AnimateOnScroll key={member.name} variants={fadeUp} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] border border-[var(--color-border)] shadow-sm bg-[var(--color-background)]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay at bottom for social links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex gap-4">
                      <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"><Linkedin className="w-5 h-5" /></a>
                      <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"><Github className="w-5 h-5" /></a>
                      <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">{member.name}</h3>
                  <p className="text-[var(--color-muted)] font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-[var(--color-text)] text-sm leading-relaxed text-balance mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-muted)] text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

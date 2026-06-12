"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and technical requirements.",
    image: "https://images.unsplash.com/photo-1512758684818-1a4734ea8cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Planning",
    description: "Creating comprehensive architecture, timelines, and establishing project milestones.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting wireframes, prototypes, and high-fidelity UI that aligns with your brand.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Development",
    description: "Writing clean, scalable code using modern technologies and best practices.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous QA, automated testing, and performance optimization before launch.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "06",
    title: "Launch",
    description: "Seamless deployment, monitoring, and transition to ongoing support phases.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-play the stepper
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-[var(--color-background)] overflow-hidden border-y border-[var(--color-border)]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Our Process"
            title="How we work together"
            description="No black boxes. We believe in building out in the open, keeping you in the loop from the first sketch to the final deployment."
            align="left"
            className="mb-16"
          />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Interactive Steps List */}
          <div className="relative flex flex-col gap-4 md:gap-6">
            {/* Background line */}
            <div className="absolute left-[27px] top-6 bottom-6 w-px bg-[var(--color-border)] z-0 hidden md:block" />
            
            {/* Animated progress line */}
            <motion.div 
              className="absolute left-[27px] top-6 w-px bg-[var(--color-primary)] z-10 hidden md:block"
              initial={{ height: "0%" }}
              animate={{ height: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {processSteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div 
                  key={step.number} 
                  className={`relative flex items-start gap-4 md:gap-6 p-4 rounded-2xl cursor-pointer transition-all duration-300 z-20 ${
                    isActive ? "bg-[var(--color-surface)] shadow-sm border border-[var(--color-border)]" : "hover:bg-[var(--color-surface)]/50 border border-transparent"
                  }`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-base md:text-lg transition-all duration-300 ${
                    isActive ? "bg-[var(--color-primary)] text-[var(--color-background)] shadow-md md:scale-110" : "bg-[var(--color-background)] border-2 border-[var(--color-border)] text-[var(--color-muted)]"
                  }`}>
                    {step.number}
                  </div>
                  <div className="flex flex-col mt-1">
                    <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"}`}>
                      {step.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed overflow-hidden"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Image Showcase */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep}
                src={processSteps[activeStep].image}
                alt={processSteps[activeStep].title}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1112]/80 via-transparent to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${activeStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-10"
              >
                <div className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-semibold tracking-wide text-sm md:text-base">
                  Phase {processSteps[activeStep].number}: {processSteps[activeStep].title}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
}

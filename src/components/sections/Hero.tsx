"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { fadeUp } from "@/lib/animations";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 2-second interval for sliding images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[var(--color-background)] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      <Container className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
            <span className="text-xs font-semibold tracking-wide text-[var(--color-secondary)] uppercase">
              Digital Product Studio
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-primary)] text-balance mb-6 max-w-3xl mx-auto leading-tight">
            Handcrafted digital tools for growing teams.
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <p className="text-base md:text-lg text-[var(--color-muted)] text-balance mb-10 max-w-xl mx-auto leading-relaxed">
            We're a small, dedicated team of builders. We write clean code, design simple interfaces, and actually care about the products we make for you. No corporate jargon, just good software.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            <Button size="lg" className="w-full sm:w-auto shadow-md">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-[var(--color-border)] bg-[var(--color-background)]">
              View Services
            </Button>
          </div>
        </AnimateOnScroll>

        {/* Realistic Hero Image Slideshow */}
        <AnimateOnScroll variants={fadeUp} delay={0.5} className="w-full relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl bg-[var(--color-surface)]">
          <div className="aspect-[16/7] md:aspect-[21/9] relative bg-slate-900">
            {HERO_IMAGES.map((src, index) => (
              <img 
                key={src}
                src={src} 
                alt={`Agency work environment ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-90" : "opacity-0"
                }`}
              />
            ))}
            {/* Very subtle gradient overlay to ensure it blends nicely */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/30 to-transparent pointer-events-none"></div>
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {HERO_IMAGES.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

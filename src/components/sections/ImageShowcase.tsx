"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { fadeUp } from "@/lib/animations";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
];

export function ImageShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 2-second interval for sliding images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-24 lg:pb-32 bg-[var(--color-background)]">
      <Container>
        {/* Realistic Hero Image Slideshow */}
        <AnimateOnScroll variants={fadeUp} delay={0.1} className="w-full relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl bg-[var(--color-surface)]">
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

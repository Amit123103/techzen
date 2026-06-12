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
    <section className="pb-24 lg:pb-32 bg-[var(--color-background)]" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Company Details */}
          <AnimateOnScroll variants={fadeUp} delay={0.1} className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] mb-6 shadow-sm w-max">
              <span className="flex h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
              <span className="text-xs font-semibold tracking-wide text-[var(--color-secondary)] uppercase">
                About Us
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-primary)] mb-6">
              Building the future of digital products.
            </h2>
            
            <p className="text-base md:text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              We are a dedicated team of digital craftsmen passionate about building scalable, high-performance software. Our mission is to transform complex business challenges into elegant, intuitive digital solutions.
            </p>
            
            <p className="text-base md:text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
              With years of experience across various industries, we combine cutting-edge technology with human-centric design. We don't just write code; we partner with you to understand your goals and deliver products that drive real growth and efficiency for your enterprise.
            </p>
            
            <div className="flex gap-8 items-center border-t border-[var(--color-border)] pt-8">
               <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[var(--color-primary)]">10+</span>
                  <span className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-semibold mt-1">Years Experience</span>
               </div>
               <div className="w-px h-12 bg-[var(--color-border)]"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[var(--color-primary)]">150+</span>
                  <span className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-semibold mt-1">Projects Delivered</span>
               </div>
            </div>
          </AnimateOnScroll>

          {/* Right Side: Realistic Hero Image Slideshow */}
          <AnimateOnScroll variants={fadeUp} delay={0.2} className="w-full relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl bg-[var(--color-surface)]">
            <div className="aspect-[4/3] lg:aspect-square relative bg-slate-900">
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
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
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
          
        </div>
      </Container>
    </section>
  );
}

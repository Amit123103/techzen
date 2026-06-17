"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { supabase } from '@/lib/supabase/client';
import { MessageSquarePlus, Star } from "lucide-react";

export function Testimonials() {
  const [realTestimonials, setRealTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonial', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setRealTestimonials(data);
          }
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return;

    // Subscribe to realtime changes
    const channel = supabase
      .channel('public:testimonials:section')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'testimonials' }, (payload) => {
        fetchTestimonials();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // If we have real testimonials from Supabase, show them
  if (realTestimonials.length > 0) {
    return (
      <section className="py-24 lg:py-32 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Client Feedback"
              title="What our clients say."
              align="center"
              className="mb-16"
            />
          </AnimateOnScroll>

          <AnimateOnScroll variants={staggerContainer}>
            <div className="grid md:grid-cols-3 gap-8">
              {realTestimonials.map((testimonial, index) => (
                <AnimateOnScroll key={testimonial.id || index} variants={fadeUp}>
                  <Card className="h-full flex flex-col justify-between bg-[var(--color-background)] hover:shadow-md transition-shadow duration-300">
                    <CardContent className="pt-8 flex flex-col h-full">
                      {/* Quote Icon */}
                      <svg className="w-8 h-8 text-[var(--color-border)] mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      
                      <p className="text-base text-[var(--color-text)] mb-8 font-medium leading-relaxed flex-grow">
                        &quot;{testimonial.message}&quot;
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex items-center gap-4 border-t border-[var(--color-border)] pt-4">
                          <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] font-bold">
                            {testimonial.name ? testimonial.name.charAt(0).toUpperCase() : "C"}
                          </div>
                          <div className="flex-grow">
                            <div className="font-bold text-[var(--color-text)] text-sm">{testimonial.name}</div>
                            {testimonial.company && (
                              <div className="text-xs text-[var(--color-muted)] font-medium">{testimonial.company}</div>
                            )}
                          </div>
                        </div>
                      </div>
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

  // Empty state — no fake testimonials, honest CTA instead
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              eyebrow="Client Feedback"
              title="We're building our reputation, one project at a time."
              align="center"
              className="mb-8"
            />
            
            <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-3xl p-10 md:p-14">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center">
                <MessageSquarePlus className="w-8 h-8 text-[var(--color-accent)]" />
              </div>
              
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">
                We&apos;re just getting started
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8 max-w-md mx-auto">
                We&apos;re a young, passionate team focused on delivering real results. Work with us and be among our first success stories — your feedback will shape who we become.
              </p>

              <div className="flex items-center justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                ))}
              </div>

              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-text)] text-[var(--color-background)] font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Start a Project & Be Our First Reviewer
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

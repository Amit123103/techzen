"use client";

import { Container } from "@/components/ui/Container";
import { ArrowLeft, CheckCircle2, Zap, Layout, Server, Lightbulb } from "lucide-react";
import Link from "next/link";
import { MultiStepContact } from "@/components/sections/MultiStepContact";
import { motion } from "framer-motion";

export function SolutionContent({ data }: { data: any }) {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <article className="pb-0 relative bg-[var(--color-background)] overflow-hidden">
      
      {/* Cherry Blossom Background Image for Hero */}
      <div 
        className="absolute top-0 left-0 w-full h-[800px] opacity-40 dark:opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }}
      />

      {/* Hero */}
      <header className="relative z-10 pt-32 pb-16 border-b border-[var(--color-border)]/50 bg-gradient-to-b from-[var(--color-background)]/40 to-[var(--color-background)] backdrop-blur-[2px]">
        <Container>
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp}>
              <Link href="/#solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] hover:text-[#D65A7C] transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" /> Back to Solutions
              </Link>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--color-text)] tracking-tight mb-4 sm:mb-6 leading-tight">
              {data.title}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-3xl">
              {data.overview}
            </motion.p>
          </motion.div>
        </Container>
      </header>

      <Container className="mt-16 mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden w-full h-[300px] md:h-[400px] mb-16 border border-[var(--color-border)] shadow-lg group relative"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 md:gap-16">
          {/* Main Content */}
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
            className="lg:col-span-2 space-y-16"
          >
            
            <motion.section variants={fadeInUp}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text)] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#D65A7C]" /> Why Choose This Solution?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {data.benefits.map((benefit: string, idx: number) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(214, 90, 124, 0.15)" }}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[#D65A7C]/50 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#D65A7C] shrink-0 mt-0.5" />
                    <p className="text-[var(--color-text)] text-xs sm:text-sm md:text-base font-medium leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            <motion.section variants={fadeInUp}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text)] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#D65A7C]" /> Key Features
              </h2>
              <div className="space-y-4 md:space-y-6">
                {data.features.map((feature: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:bg-[var(--color-surface)] hover:border-[#D65A7C]/30 transition-all group"
                  >
                    <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#D65A7C]/20 group-hover:text-[#D65A7C] transition-colors duration-500">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[var(--color-text)] mb-1 sm:mb-2">{feature.name}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-[var(--color-muted)] leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

          </motion.div>

          {/* Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-32 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] shadow-xl shadow-black/5 space-y-8">
              <div>
                <h3 className="text-xs md:text-sm font-bold text-[var(--color-text)] uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Server className="w-4 h-4 md:w-5 md:h-5 text-[#D65A7C]" /> Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.stack.map((tech: string, idx: number) => (
                    <motion.span 
                      key={tech} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + (idx * 0.1) }}
                      className="px-3 py-1.5 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] text-xs md:text-sm rounded-full font-medium shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="pt-8 border-t border-[var(--color-border)]">
                 <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-3">Ready to build?</h3>
                 <p className="text-[var(--color-muted)] text-xs md:text-sm mb-6 leading-relaxed">Discuss your specific solution requirements with our technical team today.</p>
                 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                   <Link href="/#contact" className="w-full inline-flex justify-center items-center px-4 py-3.5 bg-gradient-to-r from-[#D65A7C] to-[#FF8C69] text-white rounded-xl font-bold shadow-lg shadow-[#D65A7C]/20 hover:shadow-[#D65A7C]/40 transition-all">
                     Book a Consultation
                   </Link>
                 </motion.div>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>

      {/* Reusable Contact Form */}
      <MultiStepContact />
    </article>
  );
}

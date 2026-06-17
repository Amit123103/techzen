import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Services } from "@/components/sections/Services";
import { ImageShowcase } from "@/components/sections/ImageShowcase";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { MarqueeDivider } from "@/components/ui/MarqueeDivider";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { MultiStepContact } from "@/components/sections/MultiStepContact";
import { AnimatedLine } from "@/components/ui/AnimatedLine";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <AnimatedLine />
      <ImageShowcase />
      <AnimatedLine />
      <Services />
      <MarqueeDivider />
      <WhyChoose />
      <AnimatedLine />
      <CaseStudies />
      <AnimatedLine />
      <Process />
      <AnimatedLine />
      <Industries />
      <AnimatedLine />
      <Testimonials />
      <AnimatedLine />
      <Team />
      <AnimatedLine />
      <MultiStepContact />
    </>
  );
}

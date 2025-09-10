import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { StatsCarousel } from '@/components/StatsCarousel'
import { TestimonialMarquee } from '@/components/TestimonialMarquee'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FAQSection } from '@/components/FAQSection'
import { ConversionSection } from '@/components/ConversionSection'

export default function KidneysPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsCarousel />
      <TestimonialMarquee />
      <HowItWorksSection />
      <BenefitsGrid />
      <FAQSection />
      <ConversionSection />
    </>
  );
}
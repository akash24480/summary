import BgGradient from "@/components/common/BgGradient";
import CtaSection from "@/components/home/CtaSection";
import DemoSection from "@/components/home/DemoSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/home/PricingSection";

import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
      <HeroSection />
      <DemoSection />
      <HowItWorks />
      <PricingSection />
      <CtaSection />
      </div>

    </div>
  );
}

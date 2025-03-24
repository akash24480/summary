import BgGradient from "@/components/common/BgGradient";
import DemoSection from "@/components/home/DemoSection";
import HeroSection from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
      <HeroSection />
      <DemoSection />
      </div>

      {/* <DemoSection />
      <HowItWorks />
      <PricingSection />
      <CtaSection /> */}
    </div>
  );
}

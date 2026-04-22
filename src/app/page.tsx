import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Features } from "@/components/sections/features";
import { PlatformDemo } from "@/components/sections/platform-demo";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";

import { CTABanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <PlatformDemo />
        <HowItWorks />
        <Testimonials />

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

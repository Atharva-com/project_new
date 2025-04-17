import React from "react";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TimelinePreview } from "@/components/TimelinePreview";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <TimelinePreview />
      <CTASection />
    </>
  );
}

import { Hero } from "@/components/home/Hero";
import { QuickEstimate } from "@/components/home/QuickEstimate";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Stats } from "@/components/home/Stats";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeamPreview } from "@/components/home/TeamPreview";
// import { FaqPreview } from "@/components/home/FaqPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { ProjectGallery } from "@/components/home/ProjectGallery";
import { CallbackForm } from "@/components/home/CallbackForm";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickEstimate />
      <AboutPreview />
      <Stats />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      {/* <FaqPreview /> */}
      <TeamPreview />
      <Testimonials />
      <ProjectGallery />
      <CallbackForm />
    </>
  );
}

import ContactSection from "@/components/Contact/ContactSection";
import EventPostComponent from "@/components/EventPostSection/EventPostSection";
import GridSection from "@/components/GridSection/GridSection";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <GridSection/>
      <EventPostComponent />
      <ContactSection/>
    </>
  );
}

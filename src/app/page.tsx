'use client';
import ContactSection from "@/components/Contact/ContactSection";
import EventPostComponent from "@/components/EventPostSection/EventPostSection";
import GridSection from "@/components/GridSection/GridSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import PopupMessage from "@/components/Contact/popupMessage";
import { useSearchParams } from 'next/navigation';

export default function Home() {

  const searchParams = useSearchParams();
  const submit = searchParams.get('submit');

  return (
    <>
     {submit === "success" && <PopupMessage/>}
      <HeroSection/>
      <GridSection/>
      <EventPostComponent />
      <ContactSection/>
    </>
  );
}

import React,{FC} from 'react';
import HeroSection from '../../components/About/HeroSection';
import AboutClimbers from '@/components/About/AboutClimbers';
import OurMission from '@/components/About/OurMission';

const page:FC = () => {
  return (
    <div>
      <HeroSection/>
      <AboutClimbers/>
      <OurMission/>
    </div>
  )
}

export default page
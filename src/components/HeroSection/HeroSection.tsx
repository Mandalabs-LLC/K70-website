import React, { FC } from 'react';
import Image from 'next/image';
import threepeople from '../../../public/images/threepeople.jpg';
import group from '../../../public/images/group.jpg';
import map from '../../../public/images/map.jpg';
import background from '../../../public/images/background.jpg';

const HeroSection: FC = () => {
    return (
        <div className='relative h-[684px]'>
            <Image src={background} alt='K70_mountain' className='w-full h-full object-cover opacity-60' />

            {/* left section */}
            <section className='absolute top-[120px] md:top-[247px] md:left-16 w-full md:w-[920px]'>
                <p className='text-primary bebasNeue px-5 md:px-0 text-2xl md:text-5xl tracking-widest md:tracking-[0.5rem] leading-1 md:leading-[4.5rem]'>Celebrating a last legacy and working towards a promising future for Kanchenjunga </p>
            </section>

            {/* right section */}
            <section className=' '>
                <Image src={group} alt='group' className='absolute left-[20px] bottom-[106px] md:right-[188px] md:top-[43px] w-[200px] h-[123px] md:w-[359px] md:h-[255px] border-8 border-white' />
                <Image src={map} alt='map' className='absolute right-[32px] bottom-[48px] md:right-[85px] md:top-[220px] w-[200px] h-[123px] md:w-[359px] md:h-[255px] border-8 border-white z-50' />
                <Image src={threepeople} alt='threepeople' className='absolute right-[20px] bottom-[126px] md:right-[153px] md:bottom-[42px] w-[200px] h-[123px] md:w-[359px] md:h-[255px] border-8 border-white' />
                <div className='absolute left-[35px] top-[250px] h-[223px] w-[313px]  md:right-[420px] md:top-[195px] md:w-[451px] md:h-[328px] border-8 border-white flex justify-center items-center z-50'>
                    <video src='/video/K70_video.mp4' autoPlay muted loop  className='-z-10 object-cover h-[210px] md:h-[320px]' />
                </div>
            </section>
        </div>
    )
}

export default HeroSection

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
            <section className='absolute top-[247px] left-16  w-[920px]'>
                <p className='text-primary bebasNeue text-5xl tracking-[0.5rem] leading-[4.5rem]'>Celebrating a last legacy and working towards a promising future for Kanchenjunga </p>
            </section>

            {/* right section */}
            <section className=' '>
                <Image src={group} alt='group' className='absolute right-[188px] top-[43px] w-[359px] h-[255px] border-8 border-white' />
                <Image src={map} alt='map' className='absolute right-[85px] top-[220px] w-[359px] h-[255px] border-8 border-white z-50' />
                <Image src={threepeople} alt='threepeople' className='absolute right-[153px] bottom-[42px] w-[359px] h-[255px] border-8 border-white' />
                <div className='absolute right-[420px] top-[195px] w-[451px] h-[328px] border-8 border-white flex justify-center items-center z-50'>
                    <video src='/video/K70_video.mp4' autoPlay muted loop  className='-z-10 object-cover h-[320px]' />
                </div>
            </section>
        </div>
    )
}

export default HeroSection

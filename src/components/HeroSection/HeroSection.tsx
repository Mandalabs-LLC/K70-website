import React, { FC } from 'react';
import Image from 'next/image';
import threepeople from '../../../public/images/threepeople.jpg';
import group from '../../../public/images/group.jpg';
import map from '../../../public/images/map.jpg';
import background from '../../../public/images/background.jpg';

const HeroSection: FC = () => {
    return (
        <div className='relative h-[684px] 2xl:h-[844px]'>
            <Image src={background} alt='K70_mountain' className='w-full h-full object-cover opacity-60' />

            {/* left section */}
            <section className='absolute top-[120px] md:top-[347px] 2xl:top-[410px] md:left-16 w-full md:w-[644px] 2xl:w-[920px] h-auto'>
                <p className='text-primary bebasNeue px-4 md:px-0 text-2xl md:text-[40px] 2xl:text-5xl tracking-widest md:tracking-[6px] 2xl:tracking-[0.5rem] leading-10 md:leading-[3.5rem] 2xl:leading-[4.5rem]'>
                    Celebrating a lasting legacy and working towards a promising future for Kanchenjunga
                </p>
                <p className='bebasNeue text-xl px-4 md:px-0 md:text-3xl 2xl:text-[40px] tracking-widest md:tracking-[4px] 2xl:tracking-[0.4rem] leading-6 md:leading-[3rem] 2xl:leading-[4rem]  bg-gradient-to-b from-[#1B1F2A]  to-[#374c81] text-transparent bg-clip-text'>
                    3rd HIGHEST MOUNTAIN IN THE WORLD
                </p>
            </section>

            {/* right section */}
            <section className=' '>
                <Image src={group} alt='group' className='absolute right-[164px] top-[445px] md:right-[188px] md:top-[190px] w-[200px] h-[123px] md:w-[265px] md:h-[189px] 2xl:w-[359px] 2xl:h-[255px] border-8 border-white' />
                <Image src={map} alt='map' className='absolute right-[32px] top-[520px] md:right-[85px] md:top-[330px] 2xl:top-[380px] w-[200px] h-[123px] md:w-[285px] md:h-[189px] 2xl:w-[359px] 2xl:h-[255px] border-8 border-white z-50' />
                <Image src={threepeople} alt='threepeople' className='absolute right-[20px] bottom-[126px] md:right-[153px] md:bottom-[40px] w-[180px] h-[123px] md:w-[265px] md:h-[189px] 2xl:w-[359px] 2xl:h-[255px] border-8 border-white' />
                <div className='absolute right-[45px] top-[270px] h-[175px] w-[300px]  md:right-[360px] md:top-[300px] 2xl:right-[420px] 2xl:top-[350px] md:w-[333px] md:h-[248px] 2xl:w-[451px] 2xl:h-[328px] border-8 border-white flex justify-center items-center z-50'>
                    <video src='/video/K70_video.mp4' autoPlay muted loop className='-z-10 object-cover h-[165px] md:h-[238px] 2xl:h-[320px]' />
                </div>
            </section>
        </div>
    )
}

export default HeroSection

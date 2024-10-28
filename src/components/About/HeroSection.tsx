import React, { FC } from 'react';
import background from '../../../public/images/background.jpg';
import Image from 'next/image';

const HeroSection: FC = () => {
    return (
        <>
            <Image
                src={background}
                alt='Hero_Section_Images'
                className=' -z-40 fixed w-full h-[100vh]  bottom-0 object-cover'
                loading='lazy'
            />
            <div className='flex w-full md:h-[900px] bg-[#F5F4F3] opacity-95 px-4 md:pl-20 py-20 relative overflow-x-hidden overflow-y-hidden'>
                <div className='relative w-full md:w-[64%] space-y-6 md:space-y-[48px] top-[25px] md:top-[144px]'>
                    <h2 className='text-4xl md:text-6xl bebasNeue tracking-widest bg-clip-text text-transparent bg-[url("/images/clipImage.png")] bg-cover'>
                        70 years of <br /> Majestic Mountain
                    </h2>

                    <Image src={background} alt='k70' className='block md:hidden h-[250px] w-full object-cover' />

                    <p className='text-lg tracking-wider text-primary-light'>
                        Mount Kanchenjunga, standing at an altitude of
                        <span className='text-black font-semibold'>8,586 meters (28,169 feet)</span> is the <span className='text-black font-semibold'>third-highest peak</span> in the world.
                        The name Kanchenjunga was derived from the <span className='text-black font-semibold'>Tibetan</span> word <span className='text-black font-semibold'>‘Kang-Chhen-Dzo-Nga’</span>
                        meaning <span className='text-black font-semibold'>‘The Five Treasures of Snow’</span> , which is a sacred representation encompassing
                        <span className='text-black font-semibold'>- gold, silver, grain, gems and sacred religious texts. </span>
                        This majestic peak has long been shrouded in myth and legend, captivating climbers since the early 20th century and revered in folklore and sacred religious texts.
                    </p>
                    <div className='h-auto bg-[#93B5C1] rounded-2xl p-5'>
                        <p className='text-lg text-primary-light tracking-wider'>The Kanchenjunga region is not merely a destination but a vibrant ecosystem that requires protection and appreciation. Our initiative aims to foster sustainable
                            tourism in this area, enhancing local livelihoods while ensuring environmental conservation and the preservation of its unique cultural heritage.
                            The Kanchenjunga 70 event hopes to celebrate the legacy that has inspired many through special events hosted in Nepal and the United Kingdom.
                            We aim to raise awareness and encourage visitors to explore this stunning area, supporting local communities while protecting the environment.</p>
                    </div>
                </div>
                <div className='hidden md:block w-[430px] absolute right-4 -top-[5rem]  h-[1080px] -rotate-[15deg] '>
                    <p className='text-[#FAFBFD] bebasNeue text-6xl tracking-widest  left-14 text-center absolute top-[15rem] rotate-[15deg]'>8,586 m</p>
                    <Image src={background} alt='k70' className='h-full w-[319px] object-cover' />
                </div>

            </div>
        </>
    )
}

export default HeroSection;

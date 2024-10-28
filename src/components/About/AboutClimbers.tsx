import React, { FC } from 'react';
import Image from 'next/image';
import george from '../../../public/images/george.png';
import joe from '../../../public/images/joe.png';

const AboutClimbers: FC = () => {
    return (
        <div className='px-4 md:px-10 py-10 md:py-[6.25rem] 2xl:px-[6.5rem] flex flex-col md:flex-row bg-[#F5F4F3] opacity-95 w-full h-auto gap-5 md:gap-[60px] justify-center items-center'>
            <h1 className='block md:hidden bebasNeue text-4xl tracking-widest uppercase bg-gradient-to-t from-[#1B588A] to-[#071724] bg-clip-text text-transparent'>The first ascent of kanchenjunga</h1>
            <div className='md:w-1/2 flex gap-4 md:gap-10 '>
                <div className='relative w-full flex justify-center'>
                    <Image src={george} alt='george' />
                    <p className='absolute bottom-4 text-3xl text-white tracking-wider font-semibold w-[150px]'>George Band</p>
                </div>
                <div className='relative w-full flex justify-center'>
                    <Image src={joe} alt='joe' />
                    <p className='absolute bottom-4 text-3xl text-white tracking-wider font-semibold w-[150px]'>Joe Brown</p>
                </div>
            </div>
            <div className='md:w-1/2 md:space-y-[60px]'>
                <h1 className='hidden md:block bebasNeue text-4xl tracking-widest uppercase bg-gradient-to-t from-[#1B588A] to-[#071724] bg-clip-text text-transparent'>The first ascent of kanchenjunga</h1>
                <p className='text-primary-light text-lg tracking-wider'>The first people to reach the summit of Kanchenjunga were
                    <span className='text-xl text-black font-bold'>Joe Brown</span> and <span className='text-xl text-black font-bold'>George Band</span>, members of a British expedition, on
                    <span className='text-xl text-black font-bold'>25 May 1955</span>.
                    Kanchenjunga, being the <span className='text-xl text-black font-bold'>third-highest</span> mountain <span className='text-xl text-black font-bold'>(8,586 meters)</span> with pristine beauty, has not been extensively explored by trekkers.
                    Fewer than 1,000 international tourists visit the Kanchenjunga area annually, a number significantly lower than regions like Annapurna and Everest. <br /><br />
                    Seventy years on, the legacy of that first ascent is still evident in the continuing interest it generates across the world and across the generations.</p>
            </div>
        </div>
    )
}

export default AboutClimbers

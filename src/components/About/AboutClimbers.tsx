/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { FC, useState } from 'react';
import Image from 'next/image';
import george from '../../../public/images/george.png';
import joe from '../../../public/images/joe.png';
import { CustomModal } from '../GridDetailComponents/Gallery';

const AboutClimbers: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<string>("");

    const openModal = (imageUrl: string): void => {
        setModalImage(imageUrl);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        document.body.style.overflow = ""; // Re-enable scrolling
    };
    return (
        <>

            <div className='px-4 md:px-10 py-10 md:py-[6.25rem] 2xl:px-[6.5rem] flex flex-col md:flex-row bg-[#F5F4F3] bg-opacity-95 w-full h-auto gap-5 md:gap-[60px] justify-center items-center'>
                <h1 className='block md:hidden bebasNeue text-4xl tracking-widest uppercase bg-gradient-to-t from-[#1B588A] to-[#071724] bg-clip-text text-transparent'>The first ascent of kangchenjunga</h1>
                <div className='md:w-1/2 flex gap-4 md:gap-10 '>
                    <div className=''>
                        <Image src={george} alt='george' className='shadow-md border-8 border-white' onClick={() => openModal(george as any)} />
                        <p className='text-base text-[#2B76A3] tracking-wider bg-white text-center pb-2'>George Band</p>
                    </div>
                    <div className=''>
                        <Image src={joe} alt='joe' className='shadow-md border-8 border-white' onClick={() => openModal(joe as any)} />
                        <p className='text-base text-[#2B76A3] tracking-wider bg-white text-center pb-2'>Joe Brown</p>
                    </div>
                </div>
                <div className='md:w-1/2 md:space-y-[60px]'>
                    <h1 className='hidden md:block bebasNeue text-4xl tracking-widest uppercase bg-gradient-to-t from-[#1B588A] to-[#071724] bg-clip-text text-transparent'>The first ascent of kangchenjunga</h1>
                    <p className='text-primary-light text-lg tracking-wider'>The first people to reach the summit of Kangchenjunga were
                        <span className='text-xl text-black font-bold'> Joe Brown </span> and <span className='text-xl text-black font-bold'>George Band</span>, members of a British expedition, on&nbsp;
                        <span className='text-xl text-black font-bold'>25 May 1955</span>.
                        Kangchenjunga, being the <span className='text-xl text-black font-bold'>third-highest</span> mountain <span className='text-xl text-black font-bold'>(8,586 meters)</span> with pristine beauty, has not been extensively explored by trekkers.
                        Fewer than 1,000 international tourists visit the Kangchenjunga area annually, a number significantly lower than regions like Annapurna and Everest. <br /><br />
                        Seventy years on, the legacy of that first ascent is still evident in the continuing interest it generates across the world and across the generations.</p>
                </div>
            </div>
            {/* Modal */}
            <CustomModal
                isOpen={isModalOpen}
                currentIndex={0} // Placeholder for now; update if needed for carousel-like navigation
                images={[modalImage]} // Pass single image as an array
                onClose={closeModal}
                // onNavigate={() => { }} // Empty function since we are not navigating between images
            />

        </>
    )
}

export default AboutClimbers

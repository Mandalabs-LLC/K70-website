/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import about1 from '../../../public/images/about1.png';
import about2 from '../../../public/images/about2.png';
import about3 from '../../../public/images/partners.jpg';
import { CustomModal } from '../GridDetailComponents/Gallery';

const OurMission: FC = () => {
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
        <div className='w-full h-auto bg-[#FAFBFD] px-4 py-10 md:px-20 md:py-[6.25rem] 2xl:px-[6.5rem]'>
            <h1 className='bebasNeue text-4xl md:text-6xl tracking-widest uppercase bg-gradient-to-t from-[#1B588A] to-[#071724] bg-clip-text text-transparent w-full text-center'>Our Mission</h1>
            <div className='w-full mt-4 md:mt-[88px] flex flex-col md:flex-row gap-10 2xl:gap-20 justify-start items-center'>

                <div className='w-full h-[300px] md:w-[490px] md:h-[463px] relative'>
                    <Image  onClick={() => openModal(about3 as any)} src={about3} alt='k70' className='shadow-md border-8 border-white w-[180px] h-[154px] md:w-[285px] md:h-[240px] object-cover absolute top-1 right-[5rem] md:top-0 md:right-10 z-20' />
                    <Image onClick={() => openModal(about1 as any)}  src={about1} alt='k70' className='shadow-md border-8 border-white w-[180px] h-[154px] md:w-[285px] md:h-[240px] object-cover absolute left-[20px] top-[102px]  md:left-0 md:top-[133px]' />
                    <Image  onClick={() => openModal(about2 as any)}  src={about2} alt='k70' className='shadow-md border-8 border-white w-[180px] h-[154px] md:w-[285px] md:h-[240px] object-cover absolute bottom-[12px] right-[6px] md:right-0 md:bottom-0' />
                </div>

                <div className='flex flex-col gap-5 justify-center items-center w-full h-auto mb-20 md:hidden'>
                    <div className='py-5 space-y-5 border-b border-[#93B5C1]'>
                        <h1 className='text-black text-2xl font-semibold tracking-wider'>Honoring History</h1>
                        <p className='text-[#2D4249]'>The K70 event hopes to celebrate the legacy that has inspired many through special events hosted in Nepal, United Kingdom.</p>
                    </div>
                    <div className='py-5 space-y-5 border-b border-[#93B5C1]'>
                        <h1 className='text-black text-2xl font-semibold tracking-wider'>Promoting Sustainable Tourism</h1>
                        <p className='text-[#2D4249]'>Developing a new model of tourism that prioritizes environmental preservation and supports local communities.</p>
                    </div>
                    <div className='py-5 space-y-5 border-b border-[#93B5C1]'>
                        <h1 className='text-black text-2xl font-semibold tracking-wider'>Raising Awareness</h1>
                        <p className='text-[#2D4249]'>Encouraging visitors to explore the Kangchenjunga region responsibly and contribute to ongoing conservation efforts.</p>
                    </div>

                </div>
                <div className='hidden md:block w-[820px] 2xl:w-[1100px]'>

                    <div className='relative group'>
                        <p className='text-4xl tracking-widest font-medium text-black py-10 border-b border-[#93B5C1] cursor-default'>
                            Honoring History
                        </p>
                        <p className='w-[390px] h-[220px] text-xl tracking-wider text-primary-light bg-[#FAFBFD] p-10 text-center absolute right-2 -top-10 shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)] describe hidden group-hover:block z-20'>
                            The K70 event hopes to celebrate the legacy that has inspired many through special events hosted in Nepal, United Kingdom.
                        </p>
                    </div>

                    <div className='relative group'>
                        <p className='text-4xl tracking-widest font-medium text-black py-10 border-b border-[#93B5C1]'>
                            Promoting Sustainable Tourism
                        </p>
                        <p className='w-[390px] h-[220px] text-xl tracking-wider text-primary-light bg-[#FAFBFD] p-10 text-center absolute right-2 -top-10 shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)] hidden group-hover:block z-20'>
                            Developing a new model of tourism that prioritizes environmental preservation and supports local communities.
                        </p>
                    </div>

                    <div className='relative group'>
                        <p className='text-4xl tracking-widest font-medium text-black py-10 border-b border-[#93B5C1]'>
                            Raising Awareness
                        </p>
                        <p className='w-[390px] h-[220px] text-xl tracking-wider text-primary-light bg-[#FAFBFD] p-10 text-center absolute right-2 -top-10 shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)] hidden group-hover:block z-20'>
                            Encouraging visitors to explore the Kangchenjunga region responsibly and contribute to ongoing conservation efforts.
                        </p>
                    </div>
                </div>

            </div>
               {/* Modal */}
      <CustomModal
        isOpen={isModalOpen}
        currentIndex={0} // Placeholder for now; update if needed for carousel-like navigation
        images={[modalImage]} // Pass single image as an array
        onClose={closeModal}
        onNavigate={() => {}} // Empty function since we are not navigating between images
      />
        
    
        </div>
    )
}

export default OurMission

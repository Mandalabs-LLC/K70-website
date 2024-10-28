import React, { FC } from 'react';
import Image from 'next/image';
import about1 from '../../../public/images/about1.png';
import about2 from '../../../public/images/about2.png';
import about3 from '../../../public/images/partners.jpg';

const OurMission: FC = () => {
    return (
        <div className='w-full h-auto bg-[#FAFBFD] px-20 py-[6.25rem]'>
            <h1 className='bebasNeue text-6xl tracking-widest uppercase bg-gradient-to-t from-[#1B588A] to-[#071724] bg-clip-text text-transparent w-full text-center'>Our Mission</h1>
            <div className='w-full mt-[88px] flex gap-10 justify-start items-center'>

                <div className='w-[490px] h-[463px] relative'>
                    <Image src={about3} alt='k70' className='w-[285px] h-[240px] object-cover absolute top-0 right-10' />
                    <Image src={about1} alt='k70' className='w-[285px] h-[240px] object-cover absolute left-0 top-[133px]' />
                    <Image src={about2} alt='k70' className='w-[285px] h-[240px] object-cover absolute right-0 bottom-0' />
                </div>

                <div className='w-[820px]'>

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
        </div>
    )
}

export default OurMission

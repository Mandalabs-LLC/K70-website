import React, { FC } from 'react';
import { gridData } from '@/data/grid-data';
import Image from 'next/image';
import Link from 'next/link';

const GridSection: FC = () => {
    return (
        <div className='h-auto p-20 grid grid-cols-4 gap-10 space-10 mt-[9rem]'>
            {
                gridData.map((data, index: number) => (
                    <div key={index} className='relative h-[378px] w-[410px] overflow-hidden'>
                        <Link href={data.link}>
                            <p className='absolute z-40 bebasNeue text-blue-dark uppercase text-3xl tracking-[0.5rem] text-center w-full bg-white bg-opacity-90 py-3 px-3'>
                                {data.event}
                            </p>
                            <Image
                                src={data.photo}
                                alt="image"
                                className='object-cover h-full w-full hover:scale-110 transition-transform duration-300 z-10'
                            />
                        </Link>
                    </div>
                ))
            }
        </div>

    )
}

export default GridSection

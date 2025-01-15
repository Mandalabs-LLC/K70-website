'use client';

import React, { FC, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ClimbingHistory } from '@/components/GridDetailComponents/ClimbingHistory';
import { Events } from '@/components/GridDetailComponents/Events';
import { Future } from '@/components/GridDetailComponents/Future';
import { Gallery } from '@/components/GridDetailComponents/Gallery';
import { Nature } from '@/components/GridDetailComponents/Nature';
import { Partners } from '@/components/GridDetailComponents/Partners';
import { People } from '@/components/GridDetailComponents/People';
import { PlaceInTheWorld } from '@/components/GridDetailComponents/PlaceInTheWorld';
import { gridData } from '@/data/gridData';
import ArrowRight from '../../../../public/images/arrow-right.png';
import ArrowLeft from '../../../../public/images/arrow-left.png';


const DetailsPage: FC = () => {
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
    const pathname = usePathname();
    const router = useRouter();

    // Mapping the component names to actual components
    const componentsMap: { [key: string]: JSX.Element } = {
        "place in the world": <PlaceInTheWorld />,
        "people": <People />,
        "nature": <Nature />,
        "climbing history": <ClimbingHistory />,
        "future": <Future />,
        "k70 events": <Events />,
        "partners": <Partners />,
        "gallery": <Gallery />
    };

    // Find the index of the current path in gridData based on the link
    useEffect(() => {
        const index = gridData.findIndex((item) => pathname === item.link);
        setCurrentComponentIndex(index !== -1 ? index : 0);
    }, [pathname]);

    const currentItem = gridData[currentComponentIndex];
    const ComponentToRender = componentsMap[currentItem.event];

    // Determine previous and next indexes
    const prevIndex = (currentComponentIndex - 1 + gridData.length) % gridData.length;
    const nextIndex = (currentComponentIndex + 1) % gridData.length;

    // Navigate to the previous or next item
    const handleNavigation = (index: number) => {
        router.push(gridData[index].link);
    };

    return (
        <div className="pt-[70px] md:pt-[9rem] flex flex-col items-center ">
            {/* Navigation Arrows */}
            <div className="fixed z-50 -mt-4 flex justify-between items-center w-full bg-[#f2f6fe] p-4 text-blue-dark bebasNeue tracking-widest text-base md:text-xl leading-none">
                {/* Previous Item */}
                <button
                    className="flex items-center"
                    onClick={() => handleNavigation(prevIndex)}
                >
                    <Image
                        src={ArrowLeft}
                        alt='ArrowLeft'
                        className=' h-[25px] w-[25px] object-contain'
                    />
                    <span className='pt-[2px]'>{gridData[prevIndex].event.toUpperCase()}</span>
                </button>

                    <p>{gridData[currentComponentIndex].event.toUpperCase()}</p>
                {/* Next Item */}
                <button
                    className="flex items-center"
                    onClick={() => handleNavigation(nextIndex)}
                >
                    <span className='pt-[2px]'>{gridData[nextIndex].event.toUpperCase()}</span>
                    <Image
                        src={ArrowRight}
                        alt='ArrowRight'
                        className=' h-[25px] w-[25px] object-contain'
                    />
                </button>
            </div>

            {/* Component Rendering */}
            <div className="w-full mt-10">
                {ComponentToRender}
            </div>
        </div>
    );
};

export default DetailsPage;

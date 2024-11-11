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
        <div className="pt-[9rem] px-5 md:px-20 flex flex-col items-center space-y-5">
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center w-full">
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
                    <span className="text-base leading-none">{gridData[prevIndex].event.toUpperCase()}</span>
                </button>

                {/* Next Item */}
                <button
                    className="flex items-center"
                    onClick={() => handleNavigation(nextIndex)}
                >
                    <span className="text-base leading-none">{gridData[nextIndex].event.toUpperCase()}</span>
                    <Image
                        src={ArrowRight}
                        alt='ArrowRight'
                        className=' h-[25px] w-[25px] object-contain'
                    />
                </button>
            </div>

            {/* Component Rendering */}
            <div className="w-full max-w-4xl">
                {ComponentToRender}
            </div>
        </div>
    );
};

export default DetailsPage;

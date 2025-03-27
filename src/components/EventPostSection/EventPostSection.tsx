"use client";

import React, { useState, useEffect } from 'react';
import { gridData } from '@/data/gridData';
import InstagramImageCard from '@/components/ImageCards/InstagramImageCard';
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";

const EventPostComponent = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [imagesToShow, setImagesToShow] = useState(3);

    // Function to handle the responsive display of images
    const handleResize = () => {
        if (window.innerWidth >= 1596) {
            setImagesToShow(4); // Show 4 on 2xl screens and above
        } else if (window.innerWidth >= 1024) {
            setImagesToShow(3); // Show 3 on medium to large screens
        } else {
            setImagesToShow(1); // Show 1 on smaller screens
        }
    };

    // Listen for screen resize to adjust the number of images
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Carousel navigation handlers for infinite scrolling
    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + gridData.length) % gridData.length);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % gridData.length);
    };

    // To make the infinite loop work, append the first item to the end of the list
    const carouselData = [...gridData, gridData[0]]; // Cloning the first item at the end

    return (
        <div className="py-10 md:px-20 bg-[#FAFBFD]">
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-[400] tracking-wide text-blue-light bebasNeue">
                    EVENT POSTS
                </h2>
            </div>

            <div className="flex justify-between items-center mb-10 gap-10 p-4 md:px-5 md:py-4 bg-[#ECF7F9] border border-[#FAFBFD]">
                <div className="flex flex-col items-center w-1/2 text-center">
                    <p className="text-base md:text-2xl tracking-wide font-bold">Follow Us On Instagram</p>
                    <p className="text-lg tracking-widest md:text-3xl text-blue-light bebasNeue">@samriddhapahad</p>
                </div>
                <div className="flex flex-col items-center w-1/2 text-center">
                    <p className="text-base md:text-2xl tracking-wide font-bold">Tag us in your posts</p>
                    <p className="text-lg tracking-widest md:text-3xl text-blue-light bebasNeue">#KANGCHENJUNGA70</p>
                </div>
            </div>

            {/* Carousel Container */}
            <div className='hidden lg:block'>
                <div className="relative overflow-hidden px-5">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(startIndex * (100 / imagesToShow))}%)`,
                        }}
                    >
                        {carouselData.map((data, index) => (
                            <div
                                key={index}
                                className="min-w-[calc(100%/3)] 2xl:min-w-[calc(100%/4)] flex-shrink-0"
                            >
                                <InstagramImageCard
                                    link={data.link}
                                    imageUrl={data.photo}
                                    altText={`Post ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4 mt-10">
                    <button
                        onClick={handlePrev}
                        className="w-[38px] h-[38px] xl:w-[48px] xl:h-[48px] border-[2px] border-black rounded-full flex justify-center items-center"
                    >
                        <FaArrowLeftLong className='text-lg xl:text-xl' />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-[38px] h-[38px] xl:w-[48px] xl:h-[48px] border-[2px] border-black rounded-full flex justify-center items-center"
                    >
                        <FaArrowRightLong className='text-lg xl:text-xl' />
                    </button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center lg:hidden mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {gridData.map((data, index) => (
                        <InstagramImageCard
                            key={index}
                            link={data.link}
                            imageUrl={data.photo}
                            altText={`Post ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default EventPostComponent;

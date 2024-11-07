"use client";

import React, { useState, useEffect } from 'react';
import { gridData } from '@/data/gridData';
import InstagramImageCard from '@/components/ImageCards/InstagramImageCard';

const EventPostComponent = () => {
    const [startIndex, setStartIndex] = useState(0);

    // Determine the number of images to show based on the screen size
    let imagesToShow = 3; // Default to 3 for smaller screens

    // Function to handle the responsive display of images
    const handleResize = () => {
        if (window.innerWidth >= 1596) {
            imagesToShow = 4; // Show 4 on 2xl screens and above
        } else {
            imagesToShow = 3; // Show 3 on smaller screens
        }
    };

    // Listen for screen resize to adjust the number of images
    useEffect(() => {                
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate the end index for the images to display
    // const endIndex = startIndex + imagesToShow;

    // Carousel navigation handlers
    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - imagesToShow, 0));
    };

    const handleNext = () => {
        console.log("prev == ", startIndex, imagesToShow);
        
        setStartIndex((prev) =>
            prev + imagesToShow < gridData.length ? prev + imagesToShow : prev
        );
    };

    return (
        <div className="py-10 px-5 md:px-20 bg-[#FAFBFD]">
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-[400] tracking-wide text-blue-light bebasNeue">
                    EVENT POSTS
                </h2>
            </div>

            <div className="flex justify-between items-center mb-10 p-[20px_16px] bg-[#ECF7F9] rounded-md border border-[#FAFBFD]">
                <div className="flex flex-col items-center w-1/3 text-center">
                    <p className="text-lg md:text-xl tracking-wide font-bold">Follow Us On Instagram</p>
                    <p className="text-lg md:text-xl text-blue-light font-bold">@KANCHENJUNGA70</p>
                </div>
                <div className="flex flex-col items-center w-1/3 text-center">
                    <p className="text-lg md:text-xl tracking-wide font-bold">Tag us in your posts</p>
                    <p className="text-lg md:text-xl text-blue-light font-bold">#KANCHENJUNGA70</p>
                </div>
            </div>

            {/* TODO: this section needs some refactoring as the carousel effect doesn't seem to be working properly in some cases.  */}
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${startIndex * (100 / imagesToShow)}%)` }}
                >
                    {gridData.map((data, index) => (
                        <div
                            key={index}
                            className="min-w-[calc(100%/3)] 2xl:min-w-[calc(100%/4)] flex-shrink-0"
                        >
                            <InstagramImageCard imageUrl={data.photo} altText={`Post ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
                <button onClick={handlePrev} className="w-[48px] h-[48px] outline rounded-full flex justify-center items-center">
                    &larr;
                </button>
                <button onClick={handleNext} className="w-[48px] h-[48px] outline rounded-full flex justify-center items-center">
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default EventPostComponent;

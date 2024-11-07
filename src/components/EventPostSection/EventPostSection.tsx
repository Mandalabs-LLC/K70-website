import React, { FC } from 'react';
import { gridData } from '@/data/gridData';
import InstagramImageCard from '@/components/ImageCards/InstagramImageCard';

const EventPostComponent: FC = () => {
    return (
        <div className="py-10 px-5 md:px-20 bg-[#FAFBFD]">
            {/* Title and Instagram section */}
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-[400] tracking-wide text-blue-light bebasNeue">
                    EVENT POSTS
                </h2>
            </div>

            {/* Instagram handles */}
            <div className="flex justify-center gap-10 mb-10">
                <div className="flex flex-col items-center">
                    <p className="text-lg md:text-xl tracking-wide bebasNeue">Follow Us On Instagram</p>
                    <p className="text-lg md:text-xl text-blue-light font-bold">@KANCHENJUNGA70</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-lg md:text-xl tracking-wide bebasNeue">Tag us in your posts</p>
                    <p className="text-lg md:text-xl text-blue-light font-bold">#KANCHENJUNGA70</p>
                </div>
            </div>

            {/* Instagram images */}
            <div className="flex justify-center gap-6">
                {
                    gridData.map((data, index) => {
                        return (
                            <InstagramImageCard key={index} imageUrl={data.photo} altText="Post 1" />
                        )
                    })
                }
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center items-center gap-4 mt-10">
                <button className="w-[48px] h-[48px] outline rounded-full flex justify-center items-center">
                    {/* Left arrow icon */}
                    &larr;
                </button>
                <button className="w-[48px] h-[48px] outline rounded-full flex justify-center items-center">
                    {/* Right arrow icon */}
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default EventPostComponent;

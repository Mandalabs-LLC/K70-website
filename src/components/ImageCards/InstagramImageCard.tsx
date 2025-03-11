import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';

interface InstagramImageCardProps {
    imageUrl: StaticImageData;
    altText: string;
    link: string;
}

const  InstagramImageCard: FC<InstagramImageCardProps> = ({ imageUrl, altText, link }) => {
    return (
        <div className="relative w-[170px] h-[170px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[280px] xl:w-[340px] xl:h-[361px] xxl:w-[410px] xxl:h-[451px] 2xl:w-[410px] 2xl:h-[461px] opacity-90 overflow-hidden shadow-lg group">
            {/* Image */}
            <Image src={imageUrl} alt={altText} fill className="object-cover" />
            
            {/* Instagram icon */}
            <div className="absolute top-2 left-2 text-white text-2xl">
                <FaInstagram />
            </div>
            
            {/* Hover Button */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex gap-2 items-center px-4 py-5 bg-white text-blue-light font-semibold hover:bg-gray-200 transition-colors"
                >
                  <AiOutlineEye size={20}/> View Post
                </a>
            </div>
        </div>
    );
};

export default InstagramImageCard;

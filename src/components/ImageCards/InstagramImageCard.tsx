import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaInstagram } from 'react-icons/fa';

interface InstagramImageCardProps {
    imageUrl: StaticImageData;
    altText: string;
    link: string;
}

const InstagramImageCard: FC<InstagramImageCardProps> = ({ imageUrl, altText, link }) => {
    return (
        <div className="relative w-[290px] h-[288px] md:w-[410px] md:h-[378px] 2xl:w-[410px] 2xl:h-[461px] opacity-90 rounded-md overflow-hidden shadow-lg group">
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
                    className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors"
                >
                    View Post
                </a>
            </div>
        </div>
    );
};

export default InstagramImageCard;

import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaInstagram } from 'react-icons/fa';

interface InstagramImageCardProps {
    imageUrl: StaticImageData;
    altText: string;
}

const InstagramImageCard: FC<InstagramImageCardProps> = ({ imageUrl, altText }) => {
    return (
        <div className="relative w-[290px] h-[288px] md:w-[410px] md:h-[378px]">
            <Image src={imageUrl} alt={altText} fill className="object-cover" />
            <div className="absolute top-2 left-2 text-white text-2xl">
                <FaInstagram />
            </div>
        </div>
    );
};

export default InstagramImageCard;

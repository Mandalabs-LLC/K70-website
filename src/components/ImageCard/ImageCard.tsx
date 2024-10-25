import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ImageCardProps {
  title: string;
  imageUrl: StaticImageData;
  link: string;
}

const ImageCard: FC<ImageCardProps> = ({ title, imageUrl, link }) => {
  return (
    <div className='relative w-[290px] h-[288px] xl:w-[290px] xl:h-[288px] 2xl:w-[410px] 2xl:h-[378px] overflow-hidden'>
      <Link href={link}>
        <p className='absolute z-40 bebasNeue text-blue-dark uppercase xl:text-[28px] 2xl:text-[32px] tracking-[0.3rem] text-center w-full 2xl:h-[62px] xl:h-[58px] bg-white bg-opacity-90 py-3 px-3'>
          {title}
        </p>
        <Image
          src={imageUrl}
          alt={title}
          className='object-cover w-full h-full hover:scale-110 transition-transform duration-300 z-10'
        />
      </Link>
    </div>
  );
}

export default ImageCard;

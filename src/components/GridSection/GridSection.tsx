import React, { FC } from 'react';
import { gridData } from '@/data/gridData';
import ImageCard from '@/components/ImageCards/ImageCard';

const GridSection: FC = () => {
    return (
      <div className='h-auto w-full p-6 md:p-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 md:gap-5'>
        {gridData.map((data, index: number) => (
          <ImageCard 
            key={index}
            title={data.event}
            imageUrl={data.photo}
            link={data.link}
          />
        ))}
      </div>
    );
}

export default GridSection;
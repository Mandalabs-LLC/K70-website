/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { natureData } from '../../data/nature';
import { CustomModal } from "./Gallery";
import { useState } from "react";

export const Nature = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<string>("");

    const openModal = (imageUrl: string): void => {
        setModalImage(imageUrl);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        document.body.style.overflow = ""; // Re-enable scrolling
    };

    return (
        <>
            <Image
                src={background2}
                alt='Hero_Section_Images'
                className=' -z-40 fixed w-full h-screen top-[4.5rem] md:top-[12rem] left-0 object-cover'
                loading='lazy'
            />
            {natureData.map((data, index) => (
                <div key={index} className={`flex flex-col justify-center items-center bg-white gap-4 p-4 md:gap-20 md:p-20  ${index % 2 === 0 ? 'md:flex-row bg-opacity-90' : 'md:flex-row-reverse opacity-1'}`}>
                    <div className="w-full h-full md:w-2/3 flex flex-col justify-center">
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl  md:text-6xl pb-4 md:pb-10">{data.heading}</h1>
                        <p className="text-primary-light text-base md:text-lg tracking-wider r" dangerouslySetInnerHTML={{ __html: data.content }}></p>
                    </div>
                    <div className=" w-full h-full md:w-1/3 flex flex-col items-center">
                        <Image onClick={() => openModal(data.image as any)} src={data.image} alt="images" className='shadow-md border-8 border-white' />
                    </div>
                </div>
            ))}

            {/* Modal */}
            <CustomModal
                isOpen={isModalOpen}
                currentIndex={0} // Placeholder for now; update if needed for carousel-like navigation
                images={[modalImage]} // Pass single image as an array
                onClose={closeModal}
                onNavigate={() => { }} // Empty function since we are not navigating between images
            />

        </>
    )

}; 

/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import background from '../../../public/images/background.jpg';
import { climbingHistory } from '../../data/climbingHistoryData';
import { StaticImageData } from "next/image";
import { CustomModal } from "./Gallery";
import { useState } from "react";

interface climbingHistoryData {
    date: string;
    content: string;
    image: StaticImageData[];
}

export const ClimbingHistory = () => {
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
                src={background}
                alt='Hero_Section_Images'
                className=' -z-40 fixed w-full h-screen top-0 left-0 object-cover'
                loading='lazy'
            />
            <div className='w-full h-auto bg-white opacity-95 px-4 py-4 md:px-[62px] 2xl:px-[112px] md:py-[56px]'>
                <h1 className="text-2xl md:text-6xl tracking-widest pb-10 md:pb-[72px] bebasNeue text-blue-dark text-center">Timeline of significant Climbs of Kanchenjunga</h1>
                {climbingHistory.map((data: climbingHistoryData, index: number) => (
                    <div key='index' className={`relative flex flex-col w-full  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                        {/* vertical line hidden in pc view */}
                        <div className="absolute md:hidden h-full border-l-4 border-dashed border-blue-light"></div>

                        {/* Left content */}
                        <div className={`w-full md:w-1/2  flex items-center py-5 md:py-[34px] ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>

                            {/* Horizontal line */}
                            <div className=" md:hidden w-3/12 h-[2px] bg-blue-light"></div>
                            {/* Intersection dot */}
                            <div className="md:hidden absolute -left-[6px] w-4 h-4 bg-[#133F63] rounded-full"></div>

                            <p className="w-auto border border-primary p-2 md:py-3 md:px-4 text-2xl md:text-4xl tracking-wider bebasNeue text-primary">{data.date}</p>
                        </div>

                        {/* Horizontal and vertical lines with dot at intersection */}
                        <div className="hidden relative md:flex items-center justify-center w-1/3 ">
                            {/* Horizontal line */}
                            <div className="w-full h-[2px] bg-blue-light"></div>

                            {/* Vertical dashed line */}
                            <div className="absolute h-full border-l-4 border-dashed border-blue-light"></div>

                            {/* Intersection dot */}
                            <div className="absolute w-6 h-6 bg-[#133F63] rounded-full"></div>
                        </div>

                        {/* Right content */}
                        <div className={`w-full pl-[25%] md:pl-0  md:w-1/2 flex flex-col gap-4 items-center py-5 md:py-[34px] ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {data.image.map((img, index: number) => (
                                <Image onClick={() => openModal(img as any)} key={index} alt="image" src={img} className="w-[141px] h-[141px] md:w-[189px] md:h-[189px] object-cover" />
                            ))}
                            <p className="text-base md:text-xl">{data.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <CustomModal
                isOpen={isModalOpen}
                currentIndex={0} // Placeholder for now; update if needed for carousel-like navigation
                images={[modalImage]} // Pass single image as an array
                onClose={closeModal}
                onNavigate={() => { }} // Empty function since we are not navigating between images
            />
        </>
    )

}
import React, { useState } from "react";
import Image from "next/image";
import { FaRegTimesCircle } from "react-icons/fa";
import { galleryData } from "@/data/gallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import background2 from '../../../public/images/background2.jpg';

interface ModalProps {
    isOpen: boolean;
    currentIndex: number;
    images: string[];
    onClose: () => void;
    onNavigate: (direction: 'next' | 'prev') => void;
}

export const CustomModal: React.FC<ModalProps> = ({
    isOpen,
    currentIndex,
    images,
    onClose,
    // onNavigate,
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1100]"
            onClick={onClose}
        >
            <div
                className="relative w-[90%] max-w-[1600px] h-[80%] max-h-[1200px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-blue-500 rounded-full p-2 z-10"
                >
                    <FaRegTimesCircle size={40} />
                </button>

                {/* Navigation Arrows */}
                {/* <button
                    onClick={() => onNavigate('prev')}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 z-10"
                >
                    &#9664;
                </button>
                <button
                    onClick={() => onNavigate('next')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 z-10"
                >
                    &#9654;
                </button> */}

                {/* Image Display */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <Image
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        layout="intrinsic"
                        width={800}
                        height={600}
                        objectFit="cover"
                        className="w-auto max-h-full"
                    />
                </div>
            </div>
        </div>
    );
};


// Gallery Component
interface GalleryItem {
    imageUrl: string;
    title: string;
    description: string;
}

export const Gallery: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const openModal = (index: number): void => {
        setCurrentIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        document.body.style.overflow = ""; // Re-enable scrolling
    };

    const navigateCarousel = (direction: 'next' | 'prev'): void => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className="p-10">
            <Image
                src={background2}
                alt="Hero_Section_Images"
                className="-z-40 fixed w-full h-screen top-[4.5rem] md:top-[12rem] left-0 object-cover opacity-20"
                loading="lazy"
            />
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3, 1200: 4 }}>
                <Masonry columnsCount={2} gutter="20px" className="mb-10">
                    {galleryData.map((item: GalleryItem, index: number) => (
                        <div key={index} className="relative group p-2 bg-white">
                            <div
                                className="w-full relative cursor-pointer"
                                onClick={() => openModal(index)}
                            >
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    layout="responsive"
                                    width={800}
                                    height={600}
                                    objectFit="cover"
                                    className="shadow-lg"
                                />
                            </div>
                            <div className="pt-5 pb-4">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>

            {/* Modal */}
            <CustomModal
                isOpen={isModalOpen}
                currentIndex={currentIndex}
                images={galleryData.map((item) => item.imageUrl)}
                onClose={closeModal}
                onNavigate={navigateCarousel}
            />
        </div>
    );
};

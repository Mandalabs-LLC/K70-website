import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { FaRegTimesCircle } from "react-icons/fa";
import { galleryData } from "@/data/gallery";
import Masonry from "react-responsive-masonry";

interface ModalProps {
    isOpen: boolean;
    currentIndex: number;
    images: (StaticImageData | string)[];
    onClose: () => void;
}

export const CustomModal: React.FC<ModalProps> = ({
    isOpen,
    currentIndex,
    images,
    onClose,
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

interface GalleryItem {
    imageUrl: StaticImageData | string;
    title: string;
    description: string;
}

export const Gallery: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [columnCount, setColumnCount] = useState<number>(4);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculateColumns = () => {
            if (typeof window === 'undefined') return 4;
            const width = window.innerWidth;
            if (width >= 1200) return 4;
            if (width >= 900) return 3;
            if (width >= 600) return 2;
            return 1;
        };

        // Set initial column count
        setColumnCount(calculateColumns());

        // Handle responsive column count
        const handleResize = () => {
            setColumnCount(calculateColumns());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openModal = (index: number): void => {
        setCurrentIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        document.body.style.overflow = "";
    };

    // Create an array of arrays to distribute images evenly
    const distributeImages = () => {
        const columns: GalleryItem[][] = Array.from({ length: columnCount }, () => []);
        
        galleryData.forEach((item, index) => {
            const columnIndex = index % columnCount;
            columns[columnIndex].push(item);
        });

        return columns;
    };

    const distributedImages = distributeImages();

    return (
        <div 
            ref={galleryRef} 
            className="p-10 bg-[#F5F0EC]"
        >
            <div className="flex gap-5">
                {distributedImages.map((column, colIndex) => (
                    <div 
                        key={colIndex} 
                        className="flex-1 flex flex-col gap-5"
                    >
                        {column.map((item, index) => (
                            <div 
                                key={`${colIndex}-${index}`} 
                                className="w-full bg-white p-2"
                            >
                                <div
                                    className="w-full relative cursor-pointer"
                                    onClick={() => {
                                        // Find the actual index in the original galleryData
                                        const globalIndex = galleryData.findIndex(
                                            (dataItem) => 
                                                dataItem.imageUrl === item.imageUrl && 
                                                dataItem.title === item.title
                                        );
                                        openModal(globalIndex);
                                    }}
                                >
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        layout="responsive"
                                        width={800}
                                        height={600}
                                        objectFit="cover"
                                        quality={85}
                                        className="w-full"
                                    />
                                </div>
                                {item.description && (
                                    <div className="mt-2 text-[14px] font-normal text-gray-500">
                                        <p>{item.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <CustomModal
                isOpen={isModalOpen}
                currentIndex={currentIndex}
                images={galleryData.map((item) => item.imageUrl)}
                onClose={closeModal}
            />
        </div>
    );
};
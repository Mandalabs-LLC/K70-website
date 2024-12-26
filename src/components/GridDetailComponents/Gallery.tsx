import React, { useState } from "react";
import Image from "next/image";
import { FaRegTimesCircle } from "react-icons/fa";
import { galleryData } from "@/data/gallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import background2 from '../../../public/images/background2.jpg';

// Modal component to display image
interface ModalProps {
    isOpen: boolean;
    imageUrl: string;
    onClose: () => void;
}

export const CustomModal: React.FC<ModalProps> = ({ isOpen, imageUrl, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative p-2  rounded-md shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Centering the image */}
                <div className="relative flex justify-center items-center">
                    <Image
                        src={imageUrl}
                        alt="Modal Image"
                        layout="intrinsic"
                        width={800}
                        height={600}
                        objectFit="contain"
                        style={{ position: "relative", padding:"150px", marginTop:"40px" }} 
                    />
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-48 right-36 text-white text-4xl bg-blue-500 rounded-full"
                    >
                        <FaRegTimesCircle />
                    </button>
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
    const [modalImage, setModalImage] = useState<string>("");

    const openModal = (imageUrl: string): void => {
        setModalImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-10">
            <Image
                src={background2}
                alt="Hero_Section_Images"
                className=" -z-40 fixed w-full h-screen top-[4.5rem] md:top-[12rem] left-0 object-cover opacity-20"
                loading="lazy"
            />
            <ResponsiveMasonry columnsCountBreakPoints={{ 450: 2, 700: 4 }}>
                <Masonry columnsCount={2} gutter="20px" className="mb-10">
                    {galleryData.map((item: GalleryItem, index: number) => (
                        <div key={index} className="relative group p-2 bg-white">
                            <div className="w-full relative cursor-pointer" onClick={() => openModal(item.imageUrl)}>
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
            <CustomModal isOpen={isModalOpen} imageUrl={modalImage} onClose={closeModal} />
        </div>

    )
};

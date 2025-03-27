/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { placeInTheWorldData } from "@/data/place-in-the-world";
import longMOuntain from '../../../public/images/place-in-the-world/long-mountains.jpg';
import map from '../../../public/images/place-in-the-world/Place in the world 4.jpg';
import pray from '../../../public/images/place-in-the-world/pray.jpg';
import tent from '../../../public/images/place-in-the-world/tent.jpg';
import { CustomModal } from "./Gallery";
import { useState } from "react";

export const PlaceInTheWorld = () => {
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
            {placeInTheWorldData.map((data, index) => (
                <div key={index} className={`flex flex-col-reverse justify-center items-center bg-white gap-4 p-4 lg:gap-20 lg:px-20 lg:pt-20  ${index % 2 === 0 ? 'lg:flex-row bg-opacity-90' : 'lg:flex-row-reverse opacity-1'}`}>
                    <div className="w-full h-full lg:w-1/2 flex flex-col justify-center">
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl  md:text-6xl pb-4 md:pb-10">{data.heading}</h1>
                        <p className={`text-primary-light text-base md:text-lg tracking-wider text-left lg:text-justify `} dangerouslySetInnerHTML={{ __html: data.content }}></p>
                    </div>
                    <div className="relative w-full h-full lg:w-1/2">
                        {
                            data.video &&
                            <div className="shadow-md border-8 border-white w-full flex items-center justify-center">
                                <video src={data.video} autoPlay muted loop className="w-full h-full object-cover" />
                            </div>
                        }
                    </div>
                </div>
            ))}

            <div className={`flex justify-center items-center bg-white bg-opacity-90 lg:pb-20 w-full p-5 lg:px-20`}>

                <Image
                    onClick={() => openModal(longMOuntain as any)}
                    src={longMOuntain}
                    alt="images"
                    height={500}
                    className={`shadow-md border-8 border-white object-cover`}
                />
            </div>

            <div className={`flex flex-col lg:flex lg:flex-row justify-center items-center bg-white gap-4 p-5 md:py-10 lg:gap-10 lg:px-20`}>
                <div className="relative w-full h-full lg:w-1/3">
                    <Image
                        onClick={() => openModal(tent as any)}
                        src={tent}
                        alt="images"
                        className={`shadow-md border-8 border-white w-full object-cover`}
                    />
                </div>
                <div className="w-full h-full lg:w-2/3 flex flex-col lg:flex lg:flex-row justify-center items-center gap-4 md:gap-10">

                    <p className={`text-primary-light text-base text-left lg:text-justify  md:text-lg tracking-wider `}>
                        Mount Kangchenjunga represents not only a geographical wonder but also an integral part of Nepal’s and India&apos;s cultural and ecological expression. Its historical importance, climbing challenges, and current conservation projects make it a focal point of attention for adventurers and environmentalists alike.
                    </p>
                    
                    <Image
                        onClick={() => openModal(pray as any)}
                        src={pray}
                        alt="images"
                        height={350}
                        className={`shadow-md border-8 border-white`}
                    />

                </div>
            </div>


            <div className={`flex flex-col lg:flex lg:flex-row justify-center items-center text-left lg:text-justify  bg-white bg-opacity-90 gap-4 p-5 md:p-10 lg:gap-20 lg:px-20`}>

                <div className="w-full h-full lg:w-1/2 flex flex-col justify-center">
                    <p className={`text-primary-light text-base md:text-lg tracking-wider`}>
                        We are focusing on the Nepali side of Kangchenjunga, but of course, one cannot fully appreciate the mountain without considering its entirety.
                    </p>
                </div>
                <div className="relative w-full h-full lg:w-1/2">
                    <Image
                        onClick={() => openModal(map as any)}
                        src={map}
                        alt="images"
                        className={`shadow-md border-8 border-white`}
                    />

                </div>
            </div>

            {/* Modal */}
            <CustomModal
                isOpen={isModalOpen}
                currentIndex={0} // Placeholder for now; update if needed for carousel-like navigation
                images={[modalImage]} // Pass single image as an array
                onClose={closeModal}
                // onNavigate={() => { }} // Empty function since we are not navigating between images
            />

        </>
    )

} 
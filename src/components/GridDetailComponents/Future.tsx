/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { futureData } from '../../data/future';
import { futureSecondSectionImages } from '../../data/future';
import { CustomModal } from "./Gallery";
import { useState } from "react";

export const Future = () => {
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
            {futureData.map((data, index) => (
                <div key={index} className={`flex flex-col justify-center items-center bg-white gap-4 p-4 md:gap-20 md:p-20  ${index % 2 === 0 ? 'md:flex-row bg-opacity-90' : 'md:flex-row-reverse opacity-1'}`}>
                    <div className="w-full h-full md:w-2/3 flex flex-col justify-center">
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl md:text-6xl pb-4 md:pb-10">{data.heading}</h1>
                        <p
                            className={`text-primary-light text-base md:text-lg tracking-wider ${index % 2 === 0 ? '-mr-20' : '-ml-36'}`}
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        ></p>
                        <div className="flex justify-end">
                            <Image
                                src={data.logo}
                                alt="images"
                                className="right-0 -mr-6 mt-4"
                                onClick={() => openModal(data.logo as any)}
                            />
                        </div>
                    </div>

                    <div className=" w-full h-full md:w-1/3 flex flex-col items-center">
                        <Image src={data.image} alt="images" className='shadow-md border-8 border-white md:h-[396px] md:w-[500px]' onClick={() => openModal(data.image as any)} />
                    </div>
                </div>
            ))}
            <div className="flex flex-col justify-center items-center bg-white gap-4 px-4 py-8 md:gap-20 md:p-20 text-primary-light text-lg tracking-wider">
                <p>
                    Samriddha Pahad is a Nepali social organisation with a 13-year track record of enhancing livelihoods in Nepal&apos;s hill and mountain communities. Since 2016, Samriddha Pahad has been actively working in the Kanchenjunga region in collaboration with the KCAMC with the goal of empowering local communities through sustainable development initiatives, improving access to finance, promoting sustainable tourism, and enhancing overall living standards.<a href="https://www.spnepal.org/" target="_blank" className="text-[#2B76A3] underline">www.spnepal.org</a>
                    <br /><br />
                    In a joint venture partnership with Kanchenjunga Conservation Area Management Council (KCAMC), Samriddha Pahad has developed the Samriddha Kanchenjunga Program for sustainable tourism development in the Kanchenjunga Conservation Area.
                    <br /><br />
                    Samriddha Kanchenjunga’s holistic program has a five-pillar approach of focused development in the Kanchenjunga region.
                </p>

                <div className="flex flex-col">
                    {futureSecondSectionImages.map((data, index) => (
                        <div key={index} className="flex items-center gap-6 mb-4 border-b-2">
                            <div>
                                <h2 className="text-blue-light text-xl font-bold mb-6">{data.title}</h2>
                                <p className="text-lg mb-4">{data.content}</p>
                            </div>
                            <Image

                                src={data.image}
                                alt="img"
                                className="shadow-md border-8 border-white object-cover mb-4"
                                onClick={() => openModal(data.image as any)}
                            />

                        </div>
                    ))}
                </div>


            </div>
            <h2 className="text-white bebasNeue tracking-widest text-xl md:text-3xl text-center pt-16 pb-16" style={{ background: ' #2B76A3' }}>
                “Conserving nature whilst empowering communities of Kanchenjunga, the world’s third highest mountain” <br />
                <p className="text-lg mt-4">– Samriddha Kanchenjunga</p>
            </h2>

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

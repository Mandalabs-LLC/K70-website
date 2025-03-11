/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { futureData } from '../../data/future';
import { futureSecondSectionImages } from '../../data/future';
import { CustomModal } from "./Gallery";
import { useState } from "react";
import kcamcLogo from '../../../public/images/kcamcLogo.svg'

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
                className=' -z-40 fixed w-full h-screen top-[4.5rem] lg:top-[12rem] left-0 object-cover'
                loading='lazy'
            />
            {futureData.map((data, index) => (
                <div key={index} className={`relative flex flex-col-reverse justify-center items-center bg-white gap-4 p-4 lg:gap-20 lg:p-20  ${index % 2 === 0 ? 'lg:flex-row bg-opacity-90' : 'lg:flex-row-reverse opacity-1'}`}>
                    <Image src={kcamcLogo} alt='kcamc_logo' width={296} height={104} className="lg:absolute lg:right-20 lg:bottom-20" />
                    <Image src={data.image} alt="images" className='lg:absolute lg:right-20 z-10 shadow-lg border-8 border-white lg:h-[296px] lg:w-[400px]' onClick={() => openModal(data.image as any)} />
                    <div className="w-full h-full lg:w-1/3 flex flex-col justify-center">
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl  lg:text-6xl pb-4 lg:pb-10">{data.heading}</h1>
                        <p className={`text-primary-light text-base lg:text-lg tracking-wider text-left lg:text-justify `}
                            dangerouslySetInnerHTML={{ __html: data.content }}></p>
                    </div>
                    <div className=" w-full h-full lg:w-2/3 flex flex-col lg:flex lg:flex-row  items-center">
                        {data.video && (
                            <video src={data.video} autoPlay muted loop className="shadow-lg border-8 border-white object-cover lg:h-[465px] lg:w-[563px] 3xl:w-auto z-20" />
                        )}
                        
                    </div>
                </div>
            ))}

            <div className="flex flex-col justify-center items-center bg-white gap-4 px-4 py-8 lg:gap-20 lg:p-20 text-primary-light text-lg tracking-wider text-left lg:text-justify ">
                <p>
                    <a href="https://www.spnepal.org/" target="_blank" className="text-[#2B76A3] underline">Samriddha Pahad</a> is a Nepali social organisation with a 13-year track record of enhancing livelihoods in Nepal&apos;s hill
                    and mountain communities. Since 2016, Samriddha Pahad has been actively working in the Kangchenjunga region in collaboration
                    with the KCAMC with the goal of empowering local communities through sustainable development initiatives, improving access
                    to finance, promoting sustainable tourism, and enhancing overall living standards. <a href="https://www.spnepal.org/" target="_blank" className="text-[#2B76A3] underline">www.spnepal.org</a>
                    <br /><br />
                    In a joint venture partnership with Kangchenjunga Conservation Area Management Council (KCAMC), Samriddha Pahad has
                    developed the Samriddha Kangchenjunga Program for sustainable tourism development in the Kangchenjunga Conservation Area.
                    <br /><br />
                    Samriddha Kangchenjunga’s holistic program has a five-pillar approach of focused development in the Kangchenjunga region.
                </p>

                <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8 h-auto w-full">
                    {futureSecondSectionImages.map((data, index) => (
                        <div key={index} className="flex flex-col lg:items-center gap-6 lg:w-[428px]">
                            <Image src={data.image} alt="img" className="shadow-lg border-8 border-white " onClick={() => openModal(data.image as any)} />
                            <p className="text-blue-light text-xl text-left lg:text-center font-bold">{data.title}</p>
                            <h2 dangerouslySetInnerHTML={{ __html: data.content }}></h2>
                        </div>
                    ))}
                </div>

            </div>
            <h2 className="text-white bebasNeue tracking-widest text-xl lg:text-3xl text-center pt-16 pb-16 bg-[#024B66]">
                “Conserving nature whilst empowering communities of Kangchenjunga, the world’s third highest mountain” <br />
                <p className="text-lg mt-4">– Samriddha Kangchenjunga</p>
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

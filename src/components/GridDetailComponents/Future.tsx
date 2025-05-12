/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { futureData } from '../../data/future';
import { tourismData } from '../../data/future';
import { CustomModal } from "./Gallery";
import { useState } from "react";
import kcamcLogo from '../../../public/images/kcamcLogo.svg'

export const Future = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<string>("");
    const [activePillar, setActivePillar] = useState(1);

    const openModal = (imageUrl: string): void => {
        setModalImage(imageUrl);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        document.body.style.overflow = ""; // Re-enable scrolling
    };

    const handleHover = (pillarId: number) => {
        setActivePillar(pillarId);
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
                    <Image src={data.image} alt="images" className='lg:absolute lg:right-20 z-10 shadow-lg border-8 border-white lg:h-[296px] lg:w-[400px]' onClick={() => openModal(data.image as any)} />
                    <Image src={kcamcLogo} alt='kcamc_logo' width={296} height={104} className="lg:absolute lg:right-20 lg:bottom-10 xxl:bottom-20 " />
                    <div className="w-full h-full lg:w-1/3 flex flex-col justify-center">
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl  lg:text-6xl pb-4 lg:pb-10">{data.heading}</h1>
                        <p className={`text-primary-light text-base lg:text-lg tracking-wider text-left lg:text-justify `}
                            dangerouslySetInnerHTML={{ __html: data.content }}></p>
                    </div>
                    <div className=" w-full h-full lg:w-2/3 flex flex-col lg:flex lg:flex-row  items-center">
                        {data.video && (
                            <video src={data.video} autoPlay muted loop className="shadow-lg border-8 border-white object-cover lg:h-[450px] lg:w-[400px] xxl:h-[465px] xxl:w-[563px] 3xl:w-auto z-20" />
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

                <div className="flex flex-col bg-white ">
                    {/* Navigation Tabs */}
                    <div className="flex lg:gap-5 w-full">
                        {tourismData?.pillars?.map((pillar) => (
                            <div
                                key={pillar?.id}
                                className={`flex-1 px-3 py-2 text-left cursor-pointer transition-all duration-300 lg:rounded-sm  ${activePillar === pillar.id
                                    ? 'bg-[#024B66] text-white'
                                    : 'bg-[#EAEFFA] text-[#2B76A3] hover:bg-[#D0D8EE]'
                                    }`}
                                onMouseEnter={() => handleHover(pillar.id)}
                            >
                                <div className="text-sm text-center block lg:hidden ">{pillar.title}</div>
                                <div className="text-sm xl:text-base hidden lg:block">{`${pillar.title}: ${pillar.description}`}</div>
                            </div>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="container mx-auto px-4 pt-8 flex-grow ">

                        {tourismData.pillars.map((pillar) => (
                            <div key={pillar.id} className={`${activePillar === pillar.id ? 'block' : 'hidden'}`}>
                                <div className='flex flex-col md:flex-row gap-8'>
                                    {/* Left Column - Image */}
                                    <div className="md:w-1/2 ">
                                        <div className="p-2 border-4 border-white shadow-lg">
                                            {pillar?.image && <Image
                                                src={pillar?.image}
                                                alt={pillar?.title}
                                                className="w-full h-auto object-cover"
                                                onClick={() => openModal(pillar?.image as any)}
                                            />}
                                        </div>
                                    </div>

                                    {/* Right Column - Content */}
                                    <div className="md:w-1/2">
                                        <h2 className="text-xl font-bold text-[#2B76A3] mb-5">{pillar?.description}</h2>
                                        <div className="">
                                            <ul className="gap-2 xl:h-[320px] flex flex-col xl:flex-wrap">
                                                {pillar?.initiatives.map((initiative, index) => (
                                                    <li key={index} className="text-[#1B1F2ACC] text-sm 2xl:text-base ">{initiative}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Partners/Logos Section */}
                                < div className="mt-10 lg:mt-2 " >
                                    <div className="flex flex-wrap gap-8 justify-center items-center">
                                        {pillar?.logos.map((logo, index) => (
                                            <div key={index} className="w-20 h-auto lg:w-40 lg:h-20 flex items-center justify-center">
                                                <Image
                                                    src={logo.image}
                                                    alt={logo.name}
                                                    className="max-w-full max-h-full object-contain"
                                                    onClick={() => openModal(logo.image as any)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>

            </div >
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
            // onNavigate={() => { }} // Empty function since we are not navigating between images
            />

        </>
    )

}; 

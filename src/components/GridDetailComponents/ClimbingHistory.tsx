/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import background from '../../../public/images/background.jpg';
import { climbers, climbingHistory } from '../../data/climbingHistoryData';
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
                className=' -z-40 fixed w-full h-screen top-[4.5rem] lg:top-[12rem] left-0 object-cover'
                loading='lazy'
            />

            <div className={`flex flex-col bg-white bg-opacity-95 p-5 lg:pt-20 lg:pb-20 lg:px-20`}>

                <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-3xl ">THE LEGACY OF THE FIRST ASCENT OF KANGHENJUNGA</h1>

                <p className={`text-primary-light text-base text-left lg:text-justify lg:text-lg tracking-wider pt-10`}>
                    Expedition climbers Joe Brown and George Band were the first to ascend Kangchenjunga, on 25 May 1955, stopping just shy of the summit. The British expedition was led by Charles Evans, who had been deputy leader on the 1953 British Mount Everest expedition.
                    <br /><br />
                    In a remarkable display of humility and reverence for the mountain&apos;s sacred significance to the local Sikkimese people, they chose to leave the final snow cone untouched. This decision reflected their commitment to honour their promise to the Chogyal of the Kingdom of Sikkim.
                    <br /><br />
                    The climbing duo was followed the next day by climbers Norman Hardie and Tony Streather. The expedition also included sirdar Dawa Tensing and deputy sirdar, Annullu – both of whom had climbed to the South Col on the 1953 British Everest expedition - the team doctor, John Clegg, John Jackson, Neil Mather, and Tom McKinnon.
                </p>

                <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:gap-20 w-full py-10">
                    {climbers.map((data, index) => (
                        <div key={index} className="shadow-lg border-8 border-white flex flex-col items-center">
                            <Image
                                src={data.image}
                                alt={data.name}
                                layout="responsive"
                                width={800}
                                height={600}
                                objectFit="cover"
                                className="shadow-lg"
                            />
                            <div className="pt-5 pb-4 text-[16px] font-normal text-gray-500 bg-white w-full text-center">
                                <p className="text-blue-dark bg-white">{data.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className="uppercase text-blue-dark text-center bebasNeue tracking-widest text-3xl ">
                    “Each mountain carries its own personality and Kangchenjunga stands apart as one of the great, untamed spirits of the Himalaya.” <br />
                    -Sir John Hunt
                </h1>

            </div>

            <div className='w-full h-auto bg-white bg-opacity-80 px-4 py-4 lg:px-[62px] 2xl:px-[112px] lg:py-[56px]'>
                <h1 className="text-2xl lg:text-6xl tracking-widest pb-10 lg:pb-[72px] bebasNeue text-blue-dark text-center">Timeline of significant Climbs of Kangchenjunga</h1>
                {climbingHistory.map((data: climbingHistoryData, index: number) => (
                    <div key='index' className={`relative flex flex-col w-full  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                        {/* vertical line hidden in pc view */}
                        <div className="absolute lg:hidden h-full border-l-4 border-dashed border-blue-light"></div>

                        {/* Left content */}
                        <div className={`w-full lg:w-1/2  flex items-center py-5 lg:py-[34px] ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>

                            {/* Horizontal line */}
                            <div className=" lg:hidden w-3/12 h-[2px] bg-blue-light"></div>
                            {/* Intersection dot */}
                            <div className="lg:hidden absolute -left-[6px] w-4 h-4 bg-[#133F63] rounded-full"></div>

                            <p className="w-auto border border-primary p-2 lg:py-3 lg:px-4 text-2xl lg:text-4xl tracking-wider bebasNeue text-primary "
                             dangerouslySetInnerHTML={{ __html: data.date }}>
                            </p>
                        </div>

                        {/* Horizontal and vertical lines with dot at intersection */}
                        <div className="hidden relative lg:flex items-center justify-center w-1/3 ">
                            {/* Horizontal line */}
                            <div className="w-full h-[2px] bg-blue-light"></div>

                            {/* Vertical dashed line */}
                            <div className="absolute h-full border-l-4 border-dashed border-blue-light"></div>

                            {/* Intersection dot */}
                            <div className="absolute w-6 h-6 bg-[#133F63] rounded-full"></div>
                        </div>

                        {/* Right content */}
                        <div className={`w-full pl-[25%] lg:pl-0  lg:w-1/2 flex flex-col gap-4 items-center py-5 lg:py-[34px] opacity-1 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            {data.image.map((img, index: number) => (
                                <Image onClick={() => openModal(img as any)} key={index} alt="image" src={img} className="shadow-lg border-8 border-white w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-cover" />
                            ))}
                            <p className="text-base lg:text-xl text-left lg:text-justify ">{data.content}</p>
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
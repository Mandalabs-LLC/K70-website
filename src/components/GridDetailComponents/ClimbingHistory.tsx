/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import background from '../../../public/images/background.jpg';
import { climbingHistory } from '../../data/climbingHistoryData';
import { StaticImageData } from "next/image";
import { CustomModal } from "./Gallery";
import { useState } from "react";
import { LegacyClimber, legacyClimbers } from "@/data/legacyClimber";

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
                className=' -z-40 fixed w-full h-screen top-[4.5rem] md:top-[12rem] left-0 object-cover'
                loading='lazy'
            />


            <div className='w-full h-auto bg-white opacity-95 px-4 py-4 md:px-[62px] 2xl:px-[112px] md:py-[56px]'>
                <div className="bg-white mb-20 gap-6 flex flex-col">
                    <h1 className="text-4xl tracking-widest pb-4  bebasNeue text-blue-dark">The Legacy of first ascent of kanchenjunga</h1>
                    <p className="text-lg">Kanchenjunga was first climbed by a British expedition led by Charles Evans, who had been deputy leader on the 1953 British Mount Everest expedition.  Expedition climbers Joe Brown and George Band were first to ascend, on 25 May 1955, stopping just shy of the summit.</p>
                    <p className="text-lg">In a remarkable display of humility and reverence for the mountain&apos;s sacred significance to the local Sikkimese people, they chose to leave the final snow cone untouched. This decision reflected their commitment to honour their promise to the Chogyal of the Kingdom of Sikkim.</p>
                    <p className="text-lg">The climbing duo was followed the next day by climbers Norman Hardie and Tony Streather. The expedition also included sirdar Dawa Tensing and deputy sirdar, Annullu – both of whom had climbed to the South Col on the 1953 British Everest expedition - the team doctor, John Clegg, John Jackson, Neil Mather, and Tom McKinnon.</p>
                    <div className="flex flex-wrap justify-between">
    {legacyClimbers.map((data: LegacyClimber, index: number) => (
        <div
            key={index}
            className="flex flex-col items-center w-1/5 text-center mb-6" // Adjust w-1/5 based on the number of items per row
        >
            {/* Image */}
            <Image
                src={data.image}
                alt={data.name}
                width={200}
                height={200}
                onClick={() => openModal(data.image as any)}
                className="cursor-pointer shadow-md border-8 border-white object-cover"
            />
            {/* Name below image */}
            <div
                className="bg-[#fff]"
                style={{ width: "200px" }} // Match image width
            >
                <p className="py-2 text-[#2B76A3]">{data.name}</p>
            </div>
        </div>
    ))}
</div>


                </div>
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
                                <Image onClick={() => openModal(img as any)} key={index} alt="image" src={img} className="shadow-md border-8 border-white w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover" />
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
import React, { useState } from "react";
import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { peopleData } from '../../data/people';
import { CustomModal } from "./Gallery";
import people32 from '../../../public/images/people2.jpg';
import people22 from '../../../public/images/people/people03.jpg';
import people21 from '../../../public/images/people/people02.jpg'
import people31 from '../../../public/images/people.jpg';

export const People: React.FC = () => {
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
                alt="Hero_Section_Images"
                className="-z-40 fixed w-full h-screen top-[4.5rem] md:top-[12rem] left-0 object-cover"
                loading="lazy"
            />
            {peopleData.map((data, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-center items-center bg-white gap-4 p-4 md:gap-10 md:p-20 text-justify ${index % 2 === 0 ? "md:flex-row bg-opacity-90" : "md:flex-row-reverse opacity-1"}`}
                >
                    <div className="w-full h-full md:w-[45%] flex flex-col justify-center">
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl md:text-6xl pb-4 md:pb-10">
                            {data.heading}
                        </h1>
                        <p className={`text-primary-light text-base md:text-lg tracking-wider`}
                            dangerouslySetInnerHTML={{ __html: data.content }}>
                        </p>

                    </div>
                    <div className="w-full h-full md:w-[55%] flex flex-col items-start">
                        <div className="flex">
                            {data.video && (
                                <video src={data.video} autoPlay muted loop className="shadow-md border-8 border-white object-cover md:h-[465px] md:w-[463px] 3xl:w-auto z-20" />
                            )}
                            {/* Clickable Image */}
                            <Image
                                src={data.image}
                                alt="images"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                onClick={() => openModal(data.image as any)} // Open modal on click
                                className={` md:absolute md:right-10 md:bottom-0 shadow-md border-8 border-white cursor-pointer w-auto md:h-[396px] md:w-[400px] object-cover`}
                            />
                        </div>
                    </div>
                </div>
            ))}
            <div
                className={`flex flex-col md:flex md:flex-row justify-center items-center bg-white gap-4 p-4 md:gap-10 md:p-20 text-justify `}
            >
                <Image
                    src={people22}
                    alt="images"
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onClick={() => openModal(people22 as any)} // Open modal on click
                    className={`shadow-md border-8 border-white cursor-pointer w-auto md:h-[296px] md:w-[300px] 3xl:w-[500px] object-cover`}
                />

                <p className={`text-primary-light text-base md:text-lg tracking-wider `}>
                    The Limbu community, one of Nepal&apos;s indigenous groups, follows Kirat traditions and honours its oral scripture, Mundhum, which guides its customs and rituals.  These communities hold vibrant festivals throughout the agricultural cycles, often accompanied by music and dance and emphasising communal living and strong family ties. The Limbu community are the historic residents of these valleys and still live in the lower elevation villages of the KCA. Limbu make annual pilgrimages to Jannu, Oktang, and other sacred sites in KCA.
                    <br /><br />
                    The second main ethnic group are the Sherpas who originated in Tibet and who have settled in the higher valleys, mostly in the last hundred years. The Sherpa community is renowned for its exceptional mountaineering skills and deep spiritual connection to the Himalaya. With a rich heritage that emphasises hospitality and resilience, Sherpas frequently serve as guides for trekkers and climbers, showcasing their profound knowledge of the region’s terrain and weather patterns. Their cultural practices are closely tied to Buddhism, which influences their festivals, rituals, and the construction of stupas, and prayer flags, throughout the landscape.
                </p>
                <Image
                    src={people21}
                    alt="images"
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onClick={() => openModal(people22 as any)} // Open modal on click
                    className={`shadow-md border-8 border-white cursor-pointer w-auto md:h-[296px] md:w-[300px] 3xl:w-[500px] object-cover`}
                />

            </div>
            <div className="w-full h-full flex items-center gap-4 p-4 md:gap-10 text-justify md:p-20 bg-white bg-opacity-90">
                <div className="md:w-1/2">
                        <p>The Rai community, known for its vibrant culture and linguistic diversity, plays a significant role in the region&apos;s social fabric. With 
                            various sub-groups, each with its own dialect and customs, the Rai people celebrate their heritage through lively festivals and elaborate 
                            rituals that emphasise agricultural prosperity and communal harmony. The Rai are also known for their rich oral traditions, showcasing the 
                            importance of storytelling in their culture and honouring their history and beliefs.</p>
                </div>
                <div className="flex gap-10 md:w-1/2">
                    <Image
                        src={people31}
                        alt="images"
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onClick={() => openModal(people31 as any)} // Open modal on click
                        className={`shadow-md border-8 border-white cursor-pointer w-auto md:h-[296px] md:w-[400px] object-cover`}
                    />
                    <div className={'md:h-[296px]'}>
                        <Image
                            src={people32}
                            alt="images"
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            onClick={() => openModal(people32 as any)} // Open modal on click
                            className={`shadow-md border-8 border-white cursor-pointer w-auto h-[256px] md:w-[400px] object-cover `}
                        />
                        <p
                            className="bg-white shadow-md text-blue-light text-xs tracking-wider text-center px-4 pb-2"
                        >
                            Tashi Sherpa, a sherpa on the Kangchenjunga Expedition, 1955
                        </p>
                    </div>
                </div>

            </div>

            {/* Modal */}
            < CustomModal
                isOpen={isModalOpen}
                currentIndex={0} // Placeholder for now; update if needed for carousel-like navigation
                images={[modalImage]} // Pass single image as an array
                onClose={closeModal}
                onNavigate={() => { }} // Empty function since we are not navigating between images
            />
        </>
    );
};

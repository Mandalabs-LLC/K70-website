import React, { useState } from "react";
import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { peopleData } from '../../data/people';
import { CustomModal } from "./Gallery";
import people32 from '../../../public/images/people/People_last_01.png';
import people22 from '../../../public/images/people/people_3.png';
import people21 from '../../../public/images/people/people_2.png'
import people31 from '../../../public/images/people/People_last_02.png';

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
                className="-z-40 fixed w-full h-screen top-[4.5rem] lg:top-[12rem] left-0 object-cover"
                loading="lazy"
            />
            {peopleData.map((data, index) => (
                <div
                    key={index}
                    className={`relative flex flex-col-reverse justify-center items-center bg-white gap-4 p-4 lg:gap-10 lg:p-20 text-left lg:text-justify  ${index % 2 === 0 ? "lg:flex-row bg-opacity-90" : "lg:flex-row-reverse opacity-1"}`}
                >
                    <Image
                            src={data.image}
                            alt="images"
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            onClick={() => openModal(data.image as any)} // Open modal on click
                            className={` lg:absolute lg:right-10 lg:bottom-20  shadow-lg border-8 border-white cursor-pointer w-auto lg:w-[350px] 3xl:w-[450px] object-cover`}
                        />
                    <div className="w-full h-full lg:w-[45%] flex flex-col justify-center">
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl lg:text-6xl pb-4 lg:pb-10">
                            {data.heading}
                        </h1>
                        <p className={`text-primary-light text-base lg:text-lg tracking-wider`}
                            dangerouslySetInnerHTML={{ __html: data.content }}>
                        </p>

                    </div>
                    <div className="w-full h-full lg:w-[55%] flex flex-col items-start"> 
                        {data.video && (
                            <video src={data.video} autoPlay muted loop className="shadow-lg border-8 border-white object-cover lg:w-[200px] xl:w-[500px] xl:h-[400px] 3xl:w-[600px] z-20" />
                        )}
                    </div>
                </div>
            ))}
            <div
                className={`flex flex-col lg:flex lg:flex-row justify-center items-center bg-white gap-4 p-4 lg:gap-10 lg:p-20 text-left lg:text-justify  `}
            >
                <Image
                    src={people21}
                    alt="images"
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onClick={() => openModal(people21 as any)} // Open modal on click
                    className={`shadow-lg border-8 border-white cursor-pointer w-auto lg:w-1/4 object-cover`}
                />

                <p className={`text-primary-light text-base lg:text-lg tracking-wider lg:w-2/4`}>
                    The Limbu community, one of Nepal&apos;s indigenous groups, follows Kirat traditions and honours its oral scripture, Mundhum, which guides its customs and rituals.  These communities hold vibrant festivals throughout the agricultural cycles, often accompanied by music and dance and emphasising communal living and strong family ties. The Limbu community are the historic residents of these valleys and still live in the lower elevation villages of the KCA. Limbu make annual pilgrimages to Jannu, Oktang, and other sacred sites in KCA.
                    <br /><br />
                    The second main ethnic group are the Sherpas who originated in Tibet and who have settled in the higher valleys, mostly in the last hundred years. The Sherpa community is renowned for its exceptional mountaineering skills and deep spiritual connection to the Himalaya. With a rich heritage that emphasises hospitality and resilience, Sherpas frequently serve as guides for trekkers and climbers, showcasing their profound knowledge of the region’s terrain and weather patterns. Their cultural practices are closely tied to Buddhism, which influences their festivals, rituals, and the construction of stupas, and prayer flags, throughout the landscape.
                </p>
                <Image
                    src={people22}
                    alt="images"
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onClick={() => openModal(people22 as any)} // Open modal on click
                    className={`shadow-lg border-8 border-white cursor-pointer object-cover  lg:w-1/4`}
                />

            </div>
            <div className="w-full h-full flex flex-col lg:flex lg:flex-row  items-center gap-4 p-4 lg:gap-10 text-left lg:text-justify  lg:p-20 bg-white bg-opacity-90">
                <div className="lg:w-1/2">
                        <p>The Rai community, known for its vibrant culture and linguistic diversity, plays a significant role in the region&apos;s social fabric. With 
                            various sub-groups, each with its own dialect and customs, the Rai people celebrate their heritage through lively festivals and elaborate 
                            rituals that emphasise agricultural prosperity and communal harmony. The Rai are also known for their rich oral traditions, showcasing the 
                            importance of storytelling in their culture and honouring their history and beliefs.</p>
                </div>
                <div className="flex flex-col lg:flex lg:flex-row gap-4 lg:gap-10 lg:w-1/2">
                    <Image
                        src={people32}
                        alt="images"
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onClick={() => openModal(people32 as any)} // Open modal on click
                        className={`shadow-lg border-8 border-white cursor-pointer lg:w-1/2 object-cover`}
                    />
                    <div className={'w-auto lg:w-1/2 relative'}>
                        <Image
                            src={people31}
                            alt="images"
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            onClick={() => openModal(people31 as any)} // Open modal on click
                            className={`shadow-lg border-8 border-white cursor-pointer h-full object-cover `}
                        />
                        <p
                            className="bg-white shadow-lg text-blue-light text-xs tracking-wider text-center px-4 pb-2 absolute bottom-0 left-0"
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
                // onNavigate={() => { }} // Empty function since we are not navigating between images
            />
        </>
    );
};

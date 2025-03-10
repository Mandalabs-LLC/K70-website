"use client"
import { useState } from "react";
import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { k70Events } from '../../data/k70events';
import Link from "next/link";
// import { CustomModal } from "./Gallery";

export const Events = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [modalImage, setModalImage] = useState<string>("");

  // const openModal = (imageUrl: string): void => {
  //   setModalImage(imageUrl);
  //   setIsModalOpen(true);
  //   document.body.style.overflow = "hidden"; // Disable scrolling
  // };

  // const closeModal = (): void => {
  //   setIsModalOpen(false);
  //   document.body.style.overflow = ""; // Re-enable scrolling
  // };

  return (
    <>
      <Image
        src={background2}
        alt='Hero_Section_Images'
        className=' -z-40 fixed w-full h-screen top-[4.5rem] md:top-[12rem] left-0 object-cover'
        loading='lazy'
      />
      <div className="bg-white opacity-90 w-full h-auto flex flex-col  p-4 md:px-20 md:py-[60px]">
        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl  md:text-6xl pb-4 md:pb-6 z-10">Celebrations</h1>

        <div className="hidden md:flex gap-[160px] my-[60px]">
          <div className="w-1/3 flex flex-col justify-end">
            {k70Events.map((data, index) => (
              <div key={index} className={` flex flex-row items-center border-b border-blue-light p-3 cursor-pointer text-blue-light text-3xl ${index === currentIndex && 'text-primary text-5xl pb-5'}`}
                onMouseEnter={() => setCurrentIndex(index)}
              >
                <div className={`absolute left-0 bg-black h-2 w-20 ${index === currentIndex ? 'block' : 'hidden'}`}></div>
                <p className="uppercase bebasNeue tracking-wider">{data.date}</p>
              </div>
            ))}
          </div>

          <div className="w-2/3 flex flex-col justify-between">
            <p className="text-primary-light text-base md:text-lg tracking-wider">
              {k70Events[currentIndex].content}
            </p>
            {/* {
              k70Events[currentIndex].images && (
                <div className="grid grid-cols-3 gap-4 pt-10">
                  {k70Events[currentIndex].images && k70Events[currentIndex].images[0] && (
                    <Image onClick={() => openModal(k70Events[currentIndex].images[0].src)} height={220} src={k70Events[currentIndex].images[0]} alt={k70Events[currentIndex]?.title} className="shadow-md border-8 border-white" />
                  )}
                  {k70Events[currentIndex].images && k70Events[currentIndex].images[1] && (
                    <Image onClick={() => openModal(k70Events[currentIndex].images[1].src)} height={220} src={k70Events[currentIndex].images[1]} alt={k70Events[currentIndex]?.title} className="shadow-md border-8 border-white" />
                  )}
                  {k70Events[currentIndex].images && k70Events[currentIndex].images[2] && (
                    <Image onClick={() => openModal(k70Events[currentIndex].images[2].src)} height={220} src={k70Events[currentIndex].images[2]} alt={k70Events[currentIndex]?.title} className="shadow-md border-8 border-white" />
                  )}
                </div>
              )
            } */}
            <p className="uppercase text-blue-dark bebasNeue tracking-wider text-3xl text-right pt-10">
              {k70Events[currentIndex].title}
            </p>
          </div>

        </div>

        <div className="flex flex-col md:hidden gap-6 ">
          {k70Events.map((data, index) => (
            <div key={index} className="border border-black space-y-5">
              <p className="uppercase bebasNeue tracking-wider border-b border-black text-blue-light text-2xl px-5 py-3">{data.date}</p>
              <p className="text-primary-light text-base tracking-wider px-5">
                {data.content}
              </p>
              <p className="uppercase text-blue-dark bebasNeue tracking-wider text-2xl text-right px-5 pb-3">
                {data.title}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className="flex flex-col justify-center items-center bg-white p-4 md:px-20 md:py-[60px]">
        <p className="text-primary-light text-base md:text-lg tracking-wider text-center">
          2025 marks the 70th anniversary since the first summit to Kangchenjunga in 1955. It is a voyage of celebration that will honor a legacy inspiring many. Various events are planned to commemorate this milestone, hosted by communities in both Nepal and the United Kingdom.
          <br /><br />
          These celebrations will mirror the success of the Everest 70 event in 2023 <Link target="_blank" href="https://www.everest70.com" className="text-blue-light underline">(www.everest70.com)</Link>, showcasing the deep connections and shared history between the two regions. It promises to be a meaningful occasion filled with activities that highlight the enduring impact of this legacy.
        </p>
      </div>
      {/* <CustomModal
        isOpen={isModalOpen}
        currentIndex={0} // Placeholder for now; update if needed for carousel-like navigation
        images={[modalImage]} // Pass single image as an array
        onClose={closeModal}
        onNavigate={() => { }} // Empty function since we are not navigating between images
      /> */}

    </>
  )

}; 

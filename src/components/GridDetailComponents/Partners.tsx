import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { ourPartners } from '../../data/partners';
import Link from "next/link";

export const Partners = () => {

  return (
    <>
      <Image
        src={background2}
        alt='Hero_Section_Images'
        className=' -z-40 fixed w-full h-screen top-[4.5rem] md:top-[12rem] left-0 object-cover'
        loading='lazy'
      />
      <div className="bg-white opacity-90 w-full h-auto flex flex-col justify-center items-center p-4 md:px-20 md:py-[60px]">
        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl  md:text-6xl pb-4 md:pb-6 z-10">Our Partners</h1>
        <p className="text-primary-light text-base md:text-lg tracking-wider text-center">
          Over the past decade, we have engaged in a collaborative effort involving various partners to bring sustainable change to the region.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-10 gap-5">
            {ourPartners.map((partner, index)=>(
               <Link key={index}  href={partner.link} className="p-5 md:p-10 space-y-5 flex flex-col items-center">
               <p className="text-primary-light text-base md:text-lg tracking-wider text-center md:text-start">
                 {partner.title}
               </p>
               <Image alt='logo' src={partner.logo}/>
             </Link>
            ))}
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-primary-light text-base md:text-lg tracking-wider text-center">
            As we prepare for our upcoming event, we are seeking strategic partners who share our vision and commitment to community development.
          </p>
          <Link href='/contact' className="uppercase text-blue-dark tracking-wide text-xl pt-2 underline">Get in touch</Link>
        </div>
      </div>

    </>
  )

}; 

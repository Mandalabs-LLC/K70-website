import Image from "next/image";
import background2 from '../../../public/images/background2.jpg';
import { futureData } from '../../data/future';
import { futureSecondSectionImages } from '../../data/future';

export const Future = () => {

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
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl  md:text-6xl pb-4 md:pb-10">{data.heading}</h1>
                        <p className="text-primary-light text-base md:text-lg tracking-wider r" dangerouslySetInnerHTML={{ __html: data.content }}></p>
                    </div>
                    <div className=" w-full h-full md:w-1/3 flex flex-col items-center">
                        <Image src={data.image} alt="images" className='shadow-md border-8 border-white md:h-[396px] md:w-[379px]' />
                    </div>
                </div>
            ))}
            <div className="flex flex-col justify-center items-center bg-white gap-4 px-4 py-8 md:gap-20 md:p-20 text-primary-light text-lg tracking-wider">
                <p>
                    Samriddha Pahad is a Nepali social organisation with a 13-year track record of enhancing livelihoods in Nepal&apos;s hill
                    and mountain communities. Since 2016, Samriddha Pahad has been actively working in the Kanchenjunga region in collaboration
                    with the KCAMC and aims to empower local communities through sustainable development initiatives, improve access to
                    finance, promote tourism, and enhance overall living standards. <a href="https://www.spnepal.org.np/" target="_blank" className="text-[#2B76A3] underline">www.spnepal.org.np</a>
                    <br /><br />
                    Samriddha Pahad in a joint venture partnership with Kanchenjunga Conservation Area Management Council (KCAMC) has developed
                    Samriddha Kanchenjunga Program for sustainable tourism development in the Kanchenjunga Conservation Area.
                    <br /><br />
                    Samriddha Kanchenjunga’s holistic program has a five-pillar approach of focused development in the Kanchenjunga region.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8 h-auto w-full">
                    {futureSecondSectionImages.map((data, index) => (
                        <div key={index} className="flex flex-col   items-center gap-2 ">
                            <Image src={data.image} alt="img" className="shadow-md border-8 border-white" />
                            <p className="text-center text-base">{data.title}</p>
                            <h2 className="text-blue-light text-xl text-center font-bold max-w-[240px]">{data.content}</h2>
                        </div>
                    ))}
                </div>

                <p className="text-center py-4">
                    The program will have significant economic benefit and provide sustainable income to the local community, while conserving nature and
                    leading to an increase in biodiversity.
                </p>

            </div>


            <h2 className="text-white bebasNeue tracking-widest text-xl md:text-3xl text-center pt-10 pb-10" style={{background: ' #2B76A3'}}>
                “Conserving nature whilst empowering communities of Kanchenjunga, the world’s third highest mountain” <br />
               <p className="text-lg mt-4">– Samriddha Kanchenjunga</p>
            </h2>

        </>
    )

}; 

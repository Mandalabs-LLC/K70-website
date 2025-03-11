import Image from "next/image";
import Link from "next/link";
import KCAMCLOGO from '../../../public/images/kcamcSmallLogo.svg';
import SambriddhaPahadLogo from '../../../public/images/samridhhapahadLogo.svg';
import { ourPartners } from '../../data/partners';

export const Partners = () => {
    return (
        <>
            {/* Section 1: Main Partners */}
            <div className="flex flex-col items-center min-h-screen p-6 lg:p-20 space-y-10">
                {/* Left Section - Content */}
                <div className="w-full flex flex-col lg:flex lg:flex-row gap-5 lg:gap-10">
                    <div className="w-full lg:w-1/2">
                        <h1 className="uppercase text-blue-dark bebasNeue tracking-widest text-4xl md:text-6xl">
                            OUR CURRENT PARTNERS INCLUDE
                        </h1>
                        <p className="text-xl tracking-wider text-gray-700 text-justify">
                            Over the past decade, we have engaged in a collaborative effort involving various partners to bring sustainable change to the region.
                        </p>
                    </div>
                    <div className=" w-full lg:w-1/2 flex flex-col">
                        <video src="/video/partners.mp4" autoPlay muted loop className="w-full h-full object-cover" />
                    </div>
                </div>

                <div>

                <div className="flex flex-col lg:flex lg:flex-row gap-6 ">
                    {/* Partner 1 */}
                    <div className="bg-[#fff] p-6 rounded-lg shadow-md flex flex-col items-center">
                        <Image src={KCAMCLOGO} alt="KCAMCLOGO" width={200} height={100} className="w-auto h-auto" />
                        <a href="https://kanchenjunga.org/" target="_" className="text-blue-600 text-2xl font-semibold mt-3 text-center underline">
                            Kangchenjunga Conservation Area Management Council (KCAMC)
                        </a>
                        <p className="text-gray-700 mt-2 text-center">
                            KCAMC envisions fostering a balance between biodiversity conservation, sustainable ecosystem management, and local development. KCAMC in joint venture with Samriddha Pahad has developed holistic “Samriddha Kangchenjunga Program” for the sustainable development of the Kangchenjunga region that emphasizes protecting wildlife, flora, and ecosystems, eco-tourism through an inclusive, community-based management system.
                        </p>
                    </div>

                    {/* Partner 2 */}
                    <div className="bg-[#fff] p-6 rounded-lg shadow-md flex flex-col items-center">
                        <Image src={SambriddhaPahadLogo} alt="SamriddhaPahadLogo" width={200} height={100} className="w-auto h-auto" />
                        <a href="https://www.spnepal.org/" target="_" className="text-blue-600 text-2xl font-semibold mt-3 text-center underline">
                            Samriddha Pahad
                        </a>
                        <p className="text-gray-700 mt-2 text-center">
                            Samriddha Pahad, a social non-profit organization, has been working in Nepal since 2015 with the aim of improving living standards of mountains hills communities through sustainable economic activities. Samriddha Pahad in joint venture with KCAMC, has developed a long-term holistic program - “Samriddha Kangchenjunga Program” with a five-pillar approach focusing on environment and biodiversity, sustainable tourism infrastructure development, community human capital development, smart technology, and destination promotion.
                        </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Section 2: Additional Partners */}
            <div className="bg-[#fff] bg-opacity-90 w-full py-16 px-6 md:px-16">
                {/* Partners Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8 md:mt-10">
                    {ourPartners.map((partner, index) => (
                        <Link
                            key={index}
                            href={partner.link}
                            className="relative group p-6 space-y-4 flex flex-col items-center text-center bg-[#fff]  transition-all duration-300"
                            target="_blank"
                        >
                            {/* Partner Logo */}
                            <Image alt="logo" src={partner.logo} width={250} height={95} className="md:block hidden w-[200px] h-auto transition-all duration-300 lg:group-hover:scale-105" />

                            <div className="md:absolute md:top-0 md:left-0 flex flex-col items-center justify-center p-4 bg-[#fff] text-gray-800 rounded-lg shadow-lg md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-300 z-10">
                                <Image alt="logo" src={partner.logo} width={150} height={75} className="w-auto h-auto mb-2" />
                                <h3 className={`text-lg font-semibold ${partner.link ==='#' ? 'text-black no-underline' : 'text-blue-600 underline'}`}>{partner.title}</h3>
                                <p className="text-gray-700 text-sm mt-2">{partner.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>


            </div>

            {/* Section 3: Call to Action */}
            <div className="flex flex-col justify-center items-center bg-white py-16 px-6 md:px-16">
                <p className="text-primary-light text-lg tracking-wider text-center ">
                    As we prepare for our upcoming event, we are seeking strategic partners who share our vision and commitment to community development.
                </p>
                <Link href="/contact" className="uppercase text-blue-dark tracking-wide text-xl pt-4 underline">
                    Get in touch
                </Link>
            </div>
        </>
    );
};

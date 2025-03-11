import React, { FC } from 'react';
import logo from '../../../public/logo.svg';
import Image from 'next/image';
import { footerData } from '@/data/footerData';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer: FC = () => {
    return (
        <div className='h-auto w-full bg-blue px-5 md:px-20 py-10'>

            {/* top section */}
            <section className='flex flex-col-reverse gap-10 md:flex-row  md:gap-0 justify-between items-center'>
                <div className='block md:hidden text-center space-y-2 pb-10'>
                    <p className='border-b border-primary text-base' > Cookies </p>
                    <p className='border-b border-primary text-base' >Privacy Policy </p>
                    <p className='border-b border-primary text-base' >Terms & Conditions </p>
                </div>
                <div >
                    <Image src={logo} alt='logo' className='h-[200px] w-[200px] 2xl:h-[300px] 2xl:w-[300px]' />
                </div>
                <div className='hidden md:grid grid-cols-5 gap-5 2xl:gap-10'>
                    {footerData.map((data, index) => (
                        <Link href={data.href} key={index}>
                            <p className='text-lg text-primary uppercase bebasNeue tracking-widest'>{data.section}</p>
                        </Link>
                    ))}
                </div>
                <div className='text-base text-primary space-y-5 2xl:space-y-10 tracking-wider'>
                    <h2 className='text-xl uppercase bebasNeue tracking-[0.25rem]'>CONTACT INFORMATION</h2>
                    <p className='flex items-center gap-2'><FaMapMarkerAlt /> Sanepa, Lalitpur Nepal </p>
                    <p className='flex items-center gap-2'><MdMail /> info@spnepal.org </p>
                    <p className='flex items-center gap-2'><FaPhoneAlt /> +977 01-5904990 , 5904991</p>
                </div>

                {/* mobile view */}
                <div className='md:hidden flex flex-wrap gap-5 justify-between'>
                    {footerData.map((data, index) => (
                        <Link href={data.href} key={index}>
                            <p className='text-base text-primary uppercase bebasNeue tracking-widest'>{data.section}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* bottom section */}
            <section className='border-t border-primary flex justify-between  py-5 text-base tracking-wider'>
                <p className=''>© 2025 Kangchenjunga70. All rights reserved.</p>
                <p className='hidden md:block'>Privacy Policy . Cookies . Terms & Conditions</p>
            </section>
        </div>
    )
}

export default Footer

import React, { FC } from 'react';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import { footerData } from '@/data/footerData';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer: FC = () => {
    return (
        <div className='h-[378px] w-full bg-blue px-20'>

            {/* top section */}
            <section className='flex justify-between items-center'>
                <div >
                    <Image src={logo} alt='logo' height={250} width={300} />
                </div>
                <div className='grid grid-cols-5 gap-10'>
                    {footerData.map((data, index) => (
                        <Link href={data.href} key={index}>
                            <p className='text-base text-primary uppercase bebasNeue tracking-[0.25rem]'>{data.section}</p>
                        </Link>
                    ))}
                </div>
                <div className='text-base text-primary space-y-10 tracking-[0.025rem]'>
                    <h2 className='text-xl uppercase bebasNeue tracking-[0.25rem]'>CONTACT INFORMATION</h2>
                    <p className='flex items-center gap-2'><FaMapMarkerAlt />Sanepa, Lalitpur Nepal </p>
                    <p className='flex items-center gap-2'><MdMail />info@spnepal.org.np </p>
                    <p className='flex items-center gap-2'><FaPhoneAlt />Contact Number </p>
                </div>
            </section>

            {/* bottom section */}
            <section className='h-[48px] border-t border-primary  pt-5'>
                <p className='text-base tracking-[0.025rem]'>© 2025 Kangchenjunga70. All rights reserved.</p>
            </section>
        </div>
    )
}

export default Footer

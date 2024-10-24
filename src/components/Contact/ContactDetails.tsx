import React, { FC } from 'react';
import Image from 'next/image';
import ContactImage from '../../../public/images/contactImage.jpg';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactDetails: FC = () => {
    return (
        <div className='relative w-auto h-[727px]'>
            <Image src={ContactImage} alt='k20' className='w-full h-full object-cover opacity-45' />
            <div className='w-full h-full  backdrop-blur-sm  absolute top-0  p-10'>
                <p className='text-black bebasNeue uppercase text-4xl tracking-[0.25rem] text-center'>Contact Information</p>
                <div className='py-10 space-y-7'>
                    <div className='space-y-1'>
                        <p className='flex items-center gap-2 '>
                            <span className='text-blue-light'><MdEmail /></span>
                            <span className='text-[#6D6D6D] text-base'> Mail</span>
                        </p>
                        <p className='text-black text-xl tracking-wider pl-6'>info@spnepal.org.np</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='flex items-center gap-2 '>
                            <span className='text-blue-light'><FaPhoneAlt /></span>
                            <span className='text-[#6D6D6D] text-base'>Contact Number</span>
                        </p>
                        <p className='text-black text-xl tracking-wider pl-6'>+977-9801-151054, 01-7483462</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='flex items-center gap-2 '>
                            <span className='text-blue-light'> <FaMapMarkerAlt /></span>
                            <span className='text-[#6D6D6D] text-base'>Address</span>
                        </p>
                        <p className='text-black text-xl tracking-wider pl-6'>Sanepa, Lalitpur <br />Nepal </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;

import React, { FC } from 'react';
import Image from 'next/image';
import ContactImage from '../../../public/images/contactImage.jpg';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from 'next/link';

const ContactDetails: FC = () => {
    return (
        <div className='relative w-auto h-[727px]'>
            <Image src={ContactImage} alt='k20' className='w-full h-full object-cover opacity-45' />
            <div className='w-full h-full  backdrop-blur-sm  absolute top-0 p-5 md:p-10 space-y-10 flex flex-col items-center justify-start'>
                <p className='text-[#2B76A3] bebasNeue uppercase text-3xl md:text-4xl tracking-[0.25rem] text-center'>Contact Information</p>
                <p className='text-black text-base tracking-wider text-center'>Join us in our mission to create a prosperous future for mountain communities in Nepal!</p>
                <div className='py-2 space-y-7'>
                    <div className='space-y-1'>
                        <p className='flex items-center gap-2 '>
                            <span className='text-blue-light'><MdEmail /></span>
                            <span className='text-[#6D6D6D] text-base'> Mail</span>
                        </p>
                        <p className='text-black text-base xl:text-xl tracking-wider pl-6'>info@spnepal.org</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='flex items-center gap-2 '>
                            <span className='text-blue-light'><FaPhoneAlt /></span>
                            <span className='text-[#6D6D6D] text-base'>Contact Number</span>
                        </p>
                        <p className='text-black xl:text-xl tracking-wider pl-6'>+977 01-5904990, 5904991</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='flex items-center gap-2 '>
                            <span className='text-blue-light'> <FaMapMarkerAlt /></span>
                            <span className='text-[#6D6D6D] text-base'>Address</span>
                        </p>
                        <p className='text-black xl:text-xl tracking-wider pl-6'>Sanepa, Lalitpur, Nepal </p>
                    </div>
                </div>
                <p className='text-black text-base tracking-wider text-center'>
                    If you would like to learn more about our initiatives or discuss potential collaborations, please contact Sanjeev Neupane at
                    <Link href='mailto:info@spnepal.org' className='text-blue-light underline pl-2'>info@spnepal.org</Link>
                </p>
            </div>
        </div>
    )
}

export default ContactDetails;

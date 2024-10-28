import React, { FC } from 'react';
import Image from 'next/image';
import ContactImage from '../../../public/images/contactImage.jpg';
import ContactForm from './ContactForm';

const ContactSection: FC = () => {
    return (
        <div className='h-[920px] w-full  relative flex justify-center items-center'>
            <Image src={ContactImage} alt='k70' className='h-full w-full object-cover opacity-45 absolute' />
            <div className='flex absolute w-full justify-center items-center gap-20 py-[100px] px-20'>
                <div className='w-1/2 '>
                    <ContactForm />
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center items-center gap-20'>
                    <p className='bebasNeue text-blue-dark uppercase tracking-[5px] text-6xl text-center leading-[90px]'>“ Climbers are the ones who dare to reach beyond the skies. ”</p>
                    <div className='w-full flex justify-end'>
                        <p className='uppercase text-black bebasNeue tracking-[0.25rem] text-4xl'>- name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;

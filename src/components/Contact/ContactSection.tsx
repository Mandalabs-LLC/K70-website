import React, { FC } from 'react';
import Image from 'next/image';
import ContactImage from '../../../public/images/contactImage.jpg';
import ContactForm from './ContactForm';

const ContactSection: FC = () => {
    return (
        <div className='h-[1176px] md:h-[920px] w-full  relative flex justify-center items-center'>
            <Image src={ContactImage} alt='k70' className='h-full w-full object-cover opacity-45 absolute' />
            <div className='flex flex-col-reverse md:flex-row absolute w-full justify-center items-center gap-10 md:gap-20 px-5 py-10 md:py-[100px] md:px-20'>
                <div className='w-full md:w-1/2 '>
                    <ContactForm />
                </div>
                <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-5 md:gap-20'>
                    <p className='bebasNeue text-blue-dark uppercase tracking-[5px] text-4xl md:text-6xl text-center leading-[60px] md:leading-[90px]'>
                        “ BE COURAGEOUS ENOUGH TO EXHIBIT YOUR KINDNESS AND COMPASSION. ”
                    </p>
                    <div className='w-full flex justify-end'>
                        <p className='uppercase text-black bebasNeue tracking-[0.25rem] text-2xl md:text-4xl'>- Ani Choying Drolma</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;

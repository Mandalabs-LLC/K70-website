'use client'
import React, { FC, useState } from 'react';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { footerData } from '@/data/footerData';

const Navbar: FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className='fixed bg-[#FAFBFD] top-0 z-[1000] w-full flex flex-col md:flex-row justify-between px-5 md:px-20 h-[4rem] md:h-[8rem] bg-opacity-80'>

            {/* left section */}
            <section className='w-full md:w-auto flex items-center justify-between'>
                <Link href='/'>
                    <Image src={logo} alt='K70-logo' className='w-[64px] h-[64px] md:w-[130px] md:h-[130px]' />
                </Link>
                <button className='block text-2xl md:hidden' onClick={() => setOpen(!isOpen)}>
                    <GiHamburgerMenu />
                </button>
            </section>

            {/* right section */}
            <section className='hidden w-auto md:flex items-center'>
                <ul className='flex gap-10'>
                    <li className=' text-primary text-xl tracking-wider py-3'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className=' text-primary text-xl tracking-wider py-3'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='w-full bg-blue-dark text-white text-base px-5 py-3 hover:bg-blue-light'>
                        <Link href='/contact'> Get In Touch</Link>
                    </li>
                </ul>
            </section>

            {/* mobile section */}
            {isOpen &&
                <section className='block md:hidden absolute h-screen w-full left-0 top-[4.5rem]  bg-white z-50 '>
                    <div className='flex justify-end p-8 text-2xl text-[#2B76A3] gap-2' onClick={() => setOpen(!isOpen)}>
                        <p className='text-base'>CLOSE</p> <IoIosCloseCircleOutline />
                    </div>
                    <ul className='flex flex-col gap-5  text-primary text-2xl tracking-widest py-3 px-6'>
                        {footerData.map((data, index) => (
                            <li key={index} className={`bebasNeue ${index === 1 ? 'pb-10' : 'pb-0'}`} onClick={() => setOpen(!isOpen)}>
                                <Link href={data.href}>{data.section}</Link>
                            </li>
                        ))}
                    </ul>
                    <button className='flex w-full justify-center py-10' onClick={() => setOpen(!isOpen)}>
                        <Link href='/contact' className='w-[13rem] bg-blue-dark text-white  px-5 py-3 text-center text-xl tracking-widest hover:bg-blue-light'> Get In Touch</Link>
                    </button>
                </section>
            }

        </div>
    )
}

export default Navbar

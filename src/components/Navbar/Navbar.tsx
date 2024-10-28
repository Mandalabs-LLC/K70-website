'use client'
import React, { FC, useState } from 'react';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className='fixed bg-[#FAFBFD] top-0 z-[10000] w-full flex justify-between px-5 md:px-20 h-[4.45rem] md:h-[9rem] bg-opacity-80'>

            {/* left section */}
            <section className='w-full md:w-auto flex items-center justify-between'>
                <Link href='/'>
                    <Image src={logo} alt='K70-logo' className='w-[64px] h-[64px] md:w-[130px] md:h-[130px]' />
                </Link>
                <button className='block text-2xl md:hidden' onClick={()=> setOpen(!isOpen)}>
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
                        <Link href='./about'>About</Link>
                    </li>
                    <li className='w-full bg-blue-dark text-white text-base px-5 py-3 hover:bg-blue-light'>
                        <Link href='./contact'> Get In Touch</Link>
                    </li>
                </ul>
            </section>

        </div>
    )
}

export default Navbar

import React, { FC } from 'react';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: FC = () => {
    return (
        <div className='fixed bg-[#FAFBFD] top-0 z-[10000] w-full flex justify-between px-20 h-[9rem] bg-opacity-80'>

            {/* left section */}
            <section className=' flex items-center'>
                <Link href='/'>
                    <Image src={logo} alt='K70-logo' width={130} height={122.48} />
                </Link>
            </section>

            {/* right section */}
            <section className=' w-auto flex items-center'>
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

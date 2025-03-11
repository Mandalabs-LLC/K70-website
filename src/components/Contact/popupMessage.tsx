import React from 'react';
import { useRouter } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';
import successlogo from '../../../public/images/successlogo.png';

 
const PopupMessage= () => {
    const router = useRouter();
    return (
        <div className='fixed top-0 left-0 bg-black bg-opacity-60 h-screen w-full flex flex-col justify-center items-center z-[9999]'>
            <div className='bg-[#F8FFFC] p-10 w-[32.125rem] h-[24.625rem] space-y-10'>
            <div className='flex justify-end w-full'>
                <button onClick={()=> router.push('/')}><RxCross2 className='text-3xl'/></button>
            </div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <Image src={successlogo} alt="logo" width={80} height={80}/>
                <h1 className='text-blue-dark bebasNeue tracking-[0.25rem] text-3xl text-center'>Your request has been submitted.</h1>
                <p className='text-secondary text-base tracking-[0.0625rem]'>Thank you for contacting us.</p>
            </div>
            <div>
            </div>
        </div>
        </div>
    )
}

export default PopupMessage;

import ContactDetails from '@/components/Contact/ContactDetails'
import ContactForm from '@/components/Contact/ContactForm'
import React,{FC} from 'react'

const page:FC = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row px-5 pb-10 md:px-20 md:pb-20 pt-10 gap-5 md:gap-10 mt-[4rem] md:mt-[9rem]'>
      <ContactForm/>
      <ContactDetails/>
    </div>
  )
}

export default page

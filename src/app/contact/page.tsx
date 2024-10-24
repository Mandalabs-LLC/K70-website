import ContactDetails from '@/components/Contact/ContactDetails'
import ContactForm from '@/components/Contact/ContactForm'
import React,{FC} from 'react'

const page:FC = () => {
  return (
    <div className='flex px-20 pb-20 pt-10 gap-10'>
      <ContactForm/>
      <ContactDetails/>
    </div>
  )
}

export default page

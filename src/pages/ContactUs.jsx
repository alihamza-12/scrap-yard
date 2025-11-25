import React from 'react'
import PageLayOut from '../components/PagesLayout/PageLayOut'
import ContactUsForm from '../components/ContactUsForm/ContactUsForm'
import ConatactUsFormFooter from '../components/ContactUsForm/ConatactUsFormFooter'

const ContactUs = () => {
  return (
    <div>
      <PageLayOut/>
      <ContactUsForm/>
      <ConatactUsFormFooter/>
    </div>
  )
}

export default ContactUs
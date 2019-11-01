import * as React from 'react'
import Page from '../components/Page'
import * as contactUsLogo from '../assets/contactUs.png'

const ContactUs = () => {
  return (
    <div>
      <Page title="Contact Us" />
      <img src={contactUsLogo} style={{width: '200px'}}/>
    </div>
  )
}

export default ContactUs
import * as React from 'react'
import Page from '../components/Page'
import * as aboutUsLogo from '../assets/aboutUs.png'

const AboutUs = () => {
  return (
    <div>
      <Page title="About Us" />
      <img src={aboutUsLogo} style={{width: '200px'}}/>
    </div>
  )
}

export default AboutUs
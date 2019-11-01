import * as React from 'react'
import Page from '../components/Page'
import * as homeLogo from '../assets/home.png'

const Home = () => {
  return (
    <div>
      <Page title="Home" />
      <img src={homeLogo} style={{width: '200px'}}/>
    </div>
  )
}

export default Home
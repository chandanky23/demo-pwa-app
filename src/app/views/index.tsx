import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const MainPage = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/aboutUs" component={AboutUs}/>
        <Route path="/contactUs" component={ContactUs}/>
      </div>
    </BrowserRouter>
  )
}

export default MainPage
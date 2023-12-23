import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../assets/ask1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container head">
        <h5>Hello I'm</h5>
        <h1>Mohammed Aashiq</h1>
        <h5 className='text-light'>Front-End Developer & SAP ABAP Consultant</h5>
          <CTA />
          <HeaderSocials />

        <div className="me">
          <img src={Me} alt="" />
        </div>


        <a href="#contact" className='scroll__down'>Scroll Down</a>

      
      </div>  

    </header> 
  )
}

export default Header
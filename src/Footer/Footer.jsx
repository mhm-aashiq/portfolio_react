import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aashiq</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#serivces">Serivces</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><FaFacebookF /></a>
        <a href=""><FiInstagram /></a>
        <a href=""><FaFacebookF /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aashiq. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
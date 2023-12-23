import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram  } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="" target='_blank'>
        <BsLinkedin />
        </a>
        <a href="" target='_blank'>
        <FaGithub />
        </a>
        <a href="" target='_blank'>
        <FaInstagram  />
        </a>
    </div>
  )
}

export default HeaderSocials
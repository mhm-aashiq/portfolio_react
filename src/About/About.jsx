import React from 'react'
import './about.css'
import About1 from '../assets/dp.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={About1} alt="" />
          </div>
        </div>

          <div className="about__content">
            <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>SAP ABAP</h5>
              <small>1+ Year Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Front-End</h5>
              <small>3+ Year Experience</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>

          </div>

          <p>
             I’m an enthusiastic, self-motivated, reliable, responsible, and hardworking person. I can adaptable to the all challenging situations and
             working with team. A highly skilled and driven software engineer
             with more than a year in industry level experience and hands on
             experience in Front-end development.
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
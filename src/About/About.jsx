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
              Dynamic and results-oriented SAP ABAP professional with a
              solid foundation built upon one year of hands-on experience in
              designing, developing, and implementing innovative solutions
              within the SAP ecosystem and hands on experience in Front-end development. Proficient in creating and optimizing
              ABAP programs, reports, interfaces, and enhancements to meet
              diverse business requirements. Proven expertise in analyzing
              complex technical issues, delivering effective solutions in
              alignment with project timelines and organizational objectives.
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className='services'>
          <div className="service__head">
            <h3>UI Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Having Interested in Designing UI's</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
                <p>High Usability</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
               <p>Attractive Appearance</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
                <p>Color Palettes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
                <p>Innovative Ideas</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
                <p>Having Experience in Front-End and Back-End</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML| CSS| JS| REACT| Boostrap for Front-End</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
                <p>PHP| .NET For Back-End</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
                <p>MYSQL| MSSQL For Databases</p>
            </li>
            
          </ul>
        </article>

        <article className='services'>
          <div className="service__head">
            <h3>Lecturer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
               <p>Grade 6 to 12 ICT School Syllabus</p>
            </li>
           
            <li>
              <BiCheck className="service__list-icon" />
                <p>Creating interests of ICT for students</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
                <p>deliver ideas to become a professional in IT industry</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
                <p>Exam Preparations</p>
            </li>
          </ul>
        </article>
      </div>


    </section>
  )
}

export default Services
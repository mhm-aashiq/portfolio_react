import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>


      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
             <div> <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
              <h4>Boostrap</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div><h4>Material UI</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>


        {/* <div className="experience__frontend">

<h3>Frontend Development</h3>
<div className="experience__content">
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
   <div> <h4>HTML</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
   <div>
    <h4>Javascript</h4>
    <small className='text-light'>Experienced</small>
   </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
   <div>
    <h4>Boostrap</h4>
    <small className='text-light'>Experienced</small>
   </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>React JS</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div><h4>Material UI</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
</div>

</div> */}

        <div className="experience_sap">

        <h3>SAP ABAP Consultant</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Reports</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Module Pool</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
              <h4>Data Dictionary</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>ABAP OOPS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Function Modules</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
              <h4>Smartforms</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
          </div>

          

        </div>
      </div>
    </section>
  )
}

export default Experience
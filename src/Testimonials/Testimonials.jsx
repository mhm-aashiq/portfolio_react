import React from 'react'
import './testimonials.css'
import AVTR1 from '../../src/assets/avatar1.jpg'
import AVTR2 from '../../src/assets/avatar2.jpg'
import AVTR3 from '../../src/assets/avatar3.jpg'
import AVTR4 from '../../src/assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';




const data=[
  {
    avatar:AVTR1,
    name:'Munshif Ahamed',
    review: 'While we working as a group project He is having good / interest in creating UIs and quick understanding the concept..'

  },
  {
    avatar:AVTR2,
    name:'Hassan Saajidh',
    review: 'While we working as a group project He is having good ideas and leadership qualities by helping members in the team.'

  },
  {
    avatar:AVTR4,
    name:'Mohammed Aadhil',
    review: 'passoinate in planning, creating ideas before starting a project. having the qualities of a leader, member and best friend'

  },
  {
    avatar:AVTR3,
    name:'Mohamed Sadir',
    review: 'Ability to communicate, problem solver and Always keep trying and having good intentions to collabrate and work with others.'

  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Friends</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
         
          pagination={{ clickable: true }}
         
        >
        {
          data.map(({avatar,name,review},index) => {
          return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                   </SwiperSlide >
            )

   })
  }
         
      </Swiper>

    </section>
  )
}

export default Testimonials
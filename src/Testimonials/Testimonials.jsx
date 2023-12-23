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
    name:'Aashiq',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dolorem asperiores incidunt molestiae nisi in ad! Atque nemo, ducimus ad delectus incidunt accusantium hic debitis voluptate obcaecati quam iure rerum.'

  },
  {
    avatar:AVTR2,
    name:'Aashiq',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dolorem asperiores incidunt molestiae nisi in ad! Atque nemo, ducimus ad delectus incidunt accusantium hic debitis voluptate obcaecati quam iure rerum.'

  },
  {
    avatar:AVTR3,
    name:'Aashiq',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dolorem asperiores incidunt molestiae nisi in ad! Atque nemo, ducimus ad delectus incidunt accusantium hic debitis voluptate obcaecati quam iure rerum.'

  },
  {
    avatar:AVTR4,
    name:'Aashiq',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, dolorem asperiores incidunt molestiae nisi in ad! Atque nemo, ducimus ad delectus incidunt accusantium hic debitis voluptate obcaecati quam iure rerum.'

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
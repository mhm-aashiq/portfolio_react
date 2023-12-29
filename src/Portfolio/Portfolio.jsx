import React from 'react'
import './portfolio.css'
import IMG1 from '../../src/assets/portfolio1.jpg'
import IMG2 from '../../src/assets/portfolio2.jpg'
import IMG3 from '../../src/assets/portfolio3.jpg'
import IMG4 from '../../src/assets/portfolio4.jpg'
import IMG5 from '../../src/assets/portfolio5.png'
import IMG6 from '../../src/assets/portfolio6.jpg'


const data = [
  {
    id:1,
    image: IMG1,
    title: 'Angular - Portfolio ',
    github: 'https://github.com/mhm-aashiq/mhm-aashiq.github.io',
    demo: 'https://mhm-aashiq.github.io/'
  },
  {
    id:2,
    image: IMG2,
    title: 'React - Latest Portfolio',
    github: 'https://github.com/mhm-aashiq/portfolio_react',
    demo: 'https://mhm-aashiq.github.io/portfolio_react'
  },
  {
    id:3,
    image: IMG3,
    title: 'React - ASUPAHA',
    github: 'https://github.com/mhm-aashiq/Asupaha',
    demo: 'https://mhm-aashiq.github.io/Asupaha/'
  },
  {
    id:4,
    image: IMG4,
    title: 'React - Sample Work',
    github: 'https://github.com/mhm-aashiq/ADD',
    demo: 'https://main--lustrous-conkies-ac30f5.netlify.app/'
  },
  {
    id:5,
    image: IMG5,
    title: 'React - Courses list',
    github: 'https://github.com/mhm-aashiq/courses',
    demo: 'https://github.com/mhm-aashiq/courses'
  },
  {
    id:6,
    image: IMG6,
    title: 'React TODO',
    github: 'https://github.com/mhm-aashiq/test_todo',
    demo: 'https://mhm-aashiq.github.io/test_todo/'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Works</h5>
      <h2>Portfolio</h2>
    
      <div className="container portfolio__container">
      <article  className='portfolio__item'>
            <div className="portfolio__item-image">
            <iframe 
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
            </div>
            <h3>IOT Project - An automatic Door system</h3>
            <div className="portfolio__item-cta">
              
              <a href='https://www.youtube.com/embed/tgbNymZ7vqY' className='btn' target='_blank'>Live Demo</a>
            </div>
          </article>
    
    
    {
      data.map(({id,image,title,github,demo}) => {
        return(
          

          <article id={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn' target='_blank'>Live Demo</a>
            </div>
          </article>
    )
  })
 
    }
     
  </div>
    </section>
  )
}

export default Portfolio
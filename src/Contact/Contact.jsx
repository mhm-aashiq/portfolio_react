import React, { useRef } from 'react'
import './contact.css'
import  {MdOutlineEmail} from 'react-icons/md'
import  {RiLinkedinBoxFill} from 'react-icons/ri'
import  {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g2ze31q', 'template_1me5npx', form.current, 'rNFUbR16RgArxe2VH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
         <h5>Touch With me</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aashikm90@gmail.com</h5>
            <a href="mailto:aashikm90@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <RiLinkedinBoxFill className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Mohammed Aashiq</h5>
            <a href="https://www.linkedin.com/in/mohammed-aashiq-215713189/" target='_blank'>Visit Profile</a>
          </article>

         

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+94 77 29 23 194</h5>
            <a href="https://wa.me/+94772923194" target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
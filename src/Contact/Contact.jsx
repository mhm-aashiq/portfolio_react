import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({ handleSubmit, state }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' id='name' placeholder='Your Full Name' required />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input type="email" name='email'  id="email" placeholder='Your Email' required />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn btn-primary' type='submit'  disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
};

const Contact = () => {
  const [state, handleSubmit] = useForm('xkndnnkg');

  if (state.succeeded) {
    return (
      <section id='contact'>
        <h5>Touch With me</h5>
        <h2>Contact Me</h2>
        <div className='container contact__container'>
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
          <p className='red'>Thanks For Contacting me! Please reload the page if Needed to submit another response</p>
        </div>
      </section>
    );
  }

  return (
    <section id='contact'>
      <h5>Touch With me</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
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
        <ContactForm handleSubmit={handleSubmit} state={state} />
      </div>
    </section>
  );
};

export default Contact;

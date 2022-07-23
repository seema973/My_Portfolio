import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ht1kpgj', 'template_zsngrob', form.current, 'B3XrI_R-LRy_XaFrH')
        
      e.target.reset()
    };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdEmail className='contact_option-icon'/>
          <h4>E-mail</h4>
          <h5>seema9730040@gmail.com</h5>
          <a href="mailto:seema9730040@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
        <BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 1234567890</h5>
          <a href="https://api.whatsapp.com/send?phone=+918383968207" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <FiPhoneCall className='contact_option-icon'/>
          <h4>Phone Call</h4>
          <h5>+91 1234567890</h5>
          <a href="tel:+918383968207" target="_blank">Call me</a>
        </article>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message </button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact

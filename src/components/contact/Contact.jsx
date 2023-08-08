import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser"
import { color } from '@chakra-ui/react';




const Contact = ({theme}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_y55bxmj', 'template_5paoagk', form.current, 'UFzl-SNK1BeO5uaaA')
    .then(function(response) {
       console.log(response.text);
    }, function(error) {
       console.log(error.text);
    });

    // emailjs.sendForm('service_d8gt4bg', 'template_ptqekti', form.current, 'R5UKAlTHsQqp16BE1')

    e.target.reset()

  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article id="contact-github">
            <BsGithub className='contact_option-icon' />
            <h4>GitHub</h4>
            <h5>AhamadShaikh</h5>
            <a href="https://github.com/AhamadShaikh" target="_blank">Let's Explore</a>
          </article>

          <article id="contact-linkedin">
            <RiMessengerLine className='contact_option-icon' />
            <h4>LinkedIn</h4>
            <h5>ahamad-shaikh</h5>
            <a href="https://www.linkedin.com/in/ahamad-shaikh-142322250/" target="_blank">Send a message</a>
          </article>

          <article id='contact-phone'>
            <BsFillTelephoneForwardFill className='contact_option-icon' />
            <h4>Phone No.</h4>
            <h5>+91 9561638593</h5>
          </article>

          <article id='contact-email'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>shaikhahamadrasul786@gmail.com</h5>
            <a href="mailto:shaikhahamadrasul786@gmail.com" target="_blank">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder='Your Full Name' required />
          <input type="email" name='user_email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
import { useEffect } from 'react';
import '../css/contact_form.css'
 import ScrollReveal from 'scrollreveal';

function ContactForm(){
 
      useEffect(() => {
          // Configure the scroll reveal animation
          ScrollReveal().reveal('.contact_form', {
            delay: 200,
            origin: 'bottom',
            duration: 800,
            scale: 1,
          });
        }, []);
    return (
      <div className="contact_form">
       <input type="text" name="" id="" placeholder='Name'/>
       <input type="email" name="" id="" placeholder='Email' />
       <input type="text" name="" id="" placeholder='Subject' />
       <input type="tel" name="" id="" placeholder='Phone Number'/>
       <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
       <div className="button ">
        Send Messages
       </div>
      </div>
    )
}

export default ContactForm
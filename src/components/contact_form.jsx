import { useEffect } from 'react';
import '../css/contact_form.css'
 import ScrollReveal from 'scrollreveal';

function ContactForm({theme}){
 
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
      <div className={theme?"contact_form light_form":'contact_form'}>
       <input type="text" name="" id="" placeholder='Name'/>
       <input type="email" name="" id="" placeholder='E-mail-Adresse' />
       <input type="text" name="" id="" placeholder='Subject' />
       <input type="tel" name="" id="" placeholder='Telefonnummer'/>
       <textarea placeholder='Nachricht' name="" id="" cols="30" rows="10"></textarea>
       <div className="button ">
        Mitteilung senden
       </div>
      </div>
    )
}

export default ContactForm
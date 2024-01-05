import { useEffect } from 'react';
import '../css/contactCard.css'
 import ScrollReveal from 'scrollreveal';

function ContactCard({title , address , email , phone}){
 
      useEffect(() => {
          // Configure the scroll reveal animation
          ScrollReveal().reveal('.contact_card', {
            delay: 200,
            origin: 'bottom',
            duration: 800,
            scale: 1,
          });
        }, []);
    return (
        <div className="contact_card">
          <p className="contact_title">
            {title}: 
          </p>
          <p className="address">
        {address}
          </p>
          <div className="socials">
            <div>
                <p>Email: <span><a href={"mailto:" + email}>{email}</a></span></p>
            </div>
            <div>
                <p>Telephone: <span><a href={"tel:"+phone}>{phone}</a></span></p>
            </div>
          </div>
        </div>
    )
}


export default ContactCard
import { useEffect } from 'react';
import '../css/Footer.css'
 import ScrollReveal from 'scrollreveal';
import SlideText from './SlidedText';
import { FaTelegramPlane } from 'react-icons/fa';

function Footer({theme}){
   
      useEffect(() => {
          // Configure the scroll reveal animation
          ScrollReveal().reveal('.footer', {
            delay: 200,
            origin: 'bottom',
            duration: 800,
            scale: 1,
          });
        }, []);
    return (
        <div className={theme?"footer light_footer":'footer'}>
            <div className="top">
               
                <SlideText word={"Let's talk"} style={{
                    fontSize: '3rem',
                    fontWeight: 500,
                    marginBottom: '10px'                }}/>
            </div>
            <div className="contact">
                <div className="image"><FaTelegramPlane size={30} /></div>
                <div className="info_contact">
                    <p className='title_'>We are much closer</p>
                    <p className='subtitle'>Contact us via Telegram</p>
                </div>
            </div>
            <br />
            <div className='pages'>
            <br />
                <p style={{fontSize:'2rem'}}>Pages</p>
                <br />
                 <ul>
                    <li>Emergency Responders</li>
                    <li>VKU</li>
                    <li>Automobile</li>
                    <li>Taxi</li>
                    <li>Check Trip</li>
                    <li>Moto</li>
                    <li>Prices ( payment in installments )</li>
                    <li>About Us</li>
                    <li>Registration</li>
                 </ul>
            </div>
            <div>
                <p style={{ color: 'hsla(0, 0%, 100%, .6)',paddingLeft:'.7rem'}}>Copyright 2020 - Alle Rechte vorbehalten von </p>
            </div>
        </div>
    )
}

export default Footer
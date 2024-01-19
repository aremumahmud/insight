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
              <hr /> <br />
                <SlideText word={"Lass uns reden"} style={{
                    fontSize: '3rem',
                    fontWeight: 500,
                    marginBottom: '10px'                }}/>
            </div>
            <div className="contact">
                <div className="image"><FaTelegramPlane size={30} /></div>
                <div className="info_contact">
                    <p className='title_'>Wir sind viel näher dran</p>
                    <p className='subtitle'>Kontaktieren Sie uns per Telegram</p>
                </div>
            </div>
            <br />
            <div className='pages'>
            <br />
                <p style={{fontSize:'2rem'}}>Pages</p>
                <br />
                 <ul>
                 <li><a href='/emergency_responders'>Nothelfer</a></li>
                <li><a href='/vku'>VKU</a></li>
                <li><a href='/moto'>Motorrad</a></li>
                <li><a href='/inspection_trip'>Kontrollfahrt</a></li>
                <li><a href='/pricing'>Preise</a></li>
                <li><a href='/contact'>Kontakt</a></li>
                <li><a href='/about'>Über uns</a></li>
                <li><a href='/trial_lesson'>Fordere jetzt eine Probelektion an.</a></li>
                <li><a href='/register'>Anmeldenung</a></li>
          
                 </ul>
            </div>
            <br />
            <div>
                <p style={{ color: '#ffff',paddingLeft:'.7rem'}}>Copyright 2020 - Alle Rechte vorbehalten von </p>
            </div>
            <br />
        </div>
    )
}

export default Footer
import { useEffect } from 'react';
import '../css/bulletcard.css'
import ScrollReveal from 'scrollreveal';

function NormCard({title, content}){
  
      useEffect(() => {
          // Configure the scroll reveal animation
          ScrollReveal().reveal('.bullet_card_wrap', {
            delay: 200,
            origin: 'bottom',
            duration: 800,
            scale: 1,
          });
        }, []);
    return (
        <div className="bullet_card_wrap">
            
             <div className="bullet_card">
           <br />
            <div className="title">{title}</div>
            <div className="bullet_entails">
                {content}
            </div>
          </div>
        </div>
       
    )
}

export default NormCard
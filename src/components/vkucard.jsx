import { useEffect } from 'react';
import '../css/vku_card.css'
import ScrollReveal from 'scrollreveal';
import SlideText from './SlidedText';

function VKUCard({title, content , nobtn , Icon}){
    
      useEffect(() => {
          // Configure the scroll reveal animation
          ScrollReveal().reveal('.vku_card_wrap', {
            delay: 200,
            origin: 'bottom',
            duration: 800,
            scale: 1,
          });
        }, []);
    return (
        <div className="vku_card_wrap">
             <div className="vku_card">
            <div className="vku_image"><Icon size={40} /></div>
            <br />
            <SlideText word={title} classes={'title'} />
            {/* <div className="title">{title}</div> */}
            <div className="vku_entails">{
                content && content.map(cont=><p>{cont}</p>)
            }</div>
            {!nobtn && <div className="button1 back_color" >Book VKU</div>}
            
        </div>
        </div>
       
    )
}

export default VKUCard
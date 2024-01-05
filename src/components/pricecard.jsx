import { useEffect } from 'react';
import '../css/pricecard.css'
 import ScrollReveal from 'scrollreveal';

function PriceCard({title,subtitle, content,book}){
   
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.price_card_wrap', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
    return (
        <div className="price_card_wrap">
            
             <div className="price_card">
           <br />
            <div className="title center">{title}</div>
            <div className="title little center subtitle">{subtitle}</div>
            <div className="price_entails">
                <ul>{
                content && content.map(cont=><li>{cont}</li>)
            }
                    </ul></div>
                    <div className="button1 back_color" >{!book?'Request A Trial':'Book Course'}</div>
          </div>
        </div>
       
    )
}

export default PriceCard
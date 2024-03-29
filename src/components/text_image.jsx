import { useEffect } from 'react';
import '../css/text_image.css'
import ScrollReveal from 'scrollreveal';
import SlideText from './SlidedText';

function TextImage({reverse ,title, text ,image ,background, children,upspace}){
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.text_image', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
    
    return (
<div className="text_image" style={{flexDirection:reverse?'column-reverse':'column',background:background?'#2B2D42':'transparent'}}>
    <div>
        <SlideText word={title} classes={'text_title'}/>
    
    <div className="text">{text}{children}</div>
    </div>
    
    <div className={"image"+ (upspace?' image_fix':'')}>
        {upspace && <>
        <br /><br /> <br /><br />
        </>}
        <img src={image} alt="" />
    </div>
</div>
    )
}

export default TextImage
import { useEffect } from 'react';
import '../css/article.css'
import ScrollReveal from 'scrollreveal';
import SlideText from './SlidedText';

  

function Article({title , content , children, warning ,top, bottom}){
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.article', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
        ScrollReveal().reveal('.sub_article_contents', {
            delay: 200,
            origin: 'bottom',
            duration: 800,
            scale: 1,
          });
      }, []);
    
    return (
        <div className="article" style={{paddingTop:top?'0px':'',paddingBottom:bottom?'1rem':''}}>
        <p className="warning">{warning}</p>
            {/* <div className="article_title">{title}</div> */}
            <SlideText word={title} style={{
                fontSize:'1.7rem'
            }} />
            <br />
            <div className="article_content">{
                content && content.map(cont => <><p className='sub_article_contents'>{cont}</p><br /></>)
            }</div>
            {children}
        </div>
    )
}

export default Article
import { useEffect } from 'react';
import '../css/jumbo.css'
import { useSpring, animated } from 'react-spring';
import SlideText from './SlidedText';

function Jumbo({image , text, theme}){
    const [{ offset }, set] = useSpring(() => ({ offset: 0 })); 

    const handleScroll = () => {
      set({ offset: window.scrollY });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div
         className={theme?"jumbo-image light_jumbo":"jumbo-image"}
        style={{
          transform: offset.interpolate((o) => `translateY(${o * 0.1}px)`),
          backgroundImage: `url(${image})`
        }}
      >
      
       <div className="jumbo_content">
        <SlideText word={text} style={{
          fontSize: '2rem',
          paddingBottom: 0,
          marginBottom: 0,
          fontWeight:'normal'
          }} />
        
       </div>
      </div>
  )

}


export default Jumbo
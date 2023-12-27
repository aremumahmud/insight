import { useEffect } from 'react';
import '../css/jumbo.css'
import { useSpring, animated } from 'react-spring';

function Jumbo({image , text}){
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
    <animated.div
         className="jumbo-image"
        style={{
          transform: offset.interpolate((o) => `translateY(${o * 0.1}px)`),
          backgroundImage: `url(${image})`
        }}
      >
      
       <div className="jumbo_content">
        <p className='jumbo_title'>{text}</p>
        <p className='jum_cont'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Consectetur quibusdam, vero ducimus vel omnis neque.</p>
       </div>
      </animated.div>
  )

}


export default Jumbo
import { useEffect } from 'react';
import '../css/jumbo.css'
import { useSpring, animated } from 'react-spring';
import first_aid from '../images/91c77f9d95bf34e4ba7f1c471d5b2bd8.jpg'

function Jumbo(){
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
          backgroundImage: `url(${first_aid})`
        }}
      >
      
       <div className="jumbo_content">
        <p className='jumbo_title'>First Aid</p>
        <p className='jum_cont'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Consectetur quibusdam, vero ducimus vel omnis neque.</p>
       </div>
      </animated.div>
  )

}


export default Jumbo
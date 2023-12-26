import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/cards.css'; // You may need to create a CSS file for styling

const ParallaxImage = ({tags , title , image}) => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    set({ offset: window.scrollY });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="info">
        <div className="title">{title|| ''}</div>
        <div className="tags">
          {
            tags && tags.map(tag=><div className="tag">{tag}</div>)
          }
        </div>
      </div>
      <animated.div
        className="parallax-image"
        style={{
          transform: offset.interpolate((o) => `translateY(${o * 0.1}px)`),
          backgroundImage: `url(${image})`
        }}
      />
    </div>
  );
};

export default ParallaxImage;

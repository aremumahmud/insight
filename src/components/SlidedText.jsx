import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/slidetext.css';

const SlideText = ({ word , style , classes }) => {
  const foldTextRef = useRef(null);
  

  useEffect(() => {
    // Initialize Scroll Reveal
    const sr = ScrollReveal();

    // Configure the reveal animation
    sr.reveal(foldTextRef.current, {
      origin: 'left',
      distance: '50px',
      duration: 700,
      delay: 200,
    //   easing: 'cubic-bezier(0.5, 0, 0.1, 1)',
      beforeReveal: () => {
        // Add your clip-text animation class to the foldTextRef.current here
        foldTextRef.current.classList.add('fold-text');
      },
    });
  }, []);

  return (
    <div className="fold_container" >
      <div className={classes} style={style?style:{}}  ref={foldTextRef}>
       {/* {word.split('').map(char=><span>{char}</span>)} */}
        {word}
      </div>
    </div>
  );
};

export default SlideText;

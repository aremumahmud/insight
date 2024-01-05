import { useEffect } from 'react';
import '../css/video_tutorial.css'
import ScrollReveal from 'scrollreveal';

function VideoIframe({src}){
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.frame_wrapper', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
    return (
        <div className="frame_wrapper">
           <iframe title="video_iframe" className="video_frame" src={src} width="100%" height="550px" frameborder="0" allowfullscreen="1" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
     
        </div>
        )
}

export default VideoIframe
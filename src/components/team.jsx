import {  FaEnvelope, FaPhone } from "react-icons/fa";
import '../css/team.css'
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

function Team({image , name , attributes,phone , email}){
    
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.team', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
    return (
        <div className="team">
            <div className="team_image"><img src={image} alt="" /></div>
            <div className="team_info">
                <div className="name"><p>{name}
                    </p></div>
                <div className="attributes"><p>{attributes}</p></div>
                <div className="team_contacts">
                    <div>
                        <a href={"tel:"+ phone}>
                            <FaPhone />
                            <p>{phone}</p>
                        </a>
                        
                    </div>
                    <div>
                        <a href={"mailto:"+email}>
                            <FaEnvelope />
                    <p>{email}</p>
                        </a>
                    
                    </div>
                
                    
                </div>
            </div>
        </div>
    )
}


export default Team
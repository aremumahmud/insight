import {  FaEnvelope, FaPhone } from "react-icons/fa";
import '../css/team.css'

function Team({image , name , attributes}){
    return (
        <div className="team">
            <div className="team_image"><img src={image} alt="" /></div>
            <div className="team_info">
                <div className="name"><p>{name}
                    </p></div>
                <div className="attributes"><p>{attributes}</p></div>
                <div className="contacts">
                <FaEnvelope />
                    <FaPhone />
                </div>
            </div>
        </div>
    )
}


export default Team
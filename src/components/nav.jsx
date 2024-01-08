import {FaTelegramPlane } from 'react-icons/fa'
import '../css/nav.css'


function Nav({isopen , theme}){
    return (
        <div className={theme?"nav_bar light_nav":'nav_bar'} style={{display:isopen?'flex':'none'}}>
            <ul>
                <li><a href='/emergency_responders'>Emergency Responders</a></li>
                <li><a href='/vku'>VKU</a></li>
                <li><a href='/moto'>Moto</a></li>
                <li><a href='/inspection_trip'>Inspection Trip</a></li>
                <li><a href='/pricing'>Pricing</a></li>
                <li><a href='/contact'>Contact Us</a></li>
                <li><a href='/about'>About Us</a></li>
                <li><a href='/trial_lesson'>Request A Trial Lesson</a></li>
                <li><a href='/register'>Registration</a></li>
            </ul>
            <br /><br /><br />
            <div className="contact">
                <div className="image">
<FaTelegramPlane size={30} />
                </div>
                <div className="info_contact">
                    <p className='title_'>We are much closer</p>
                    <p className='subtitle'>Contact us via Telegram</p>
                </div>
            </div>
        </div>
    )
}

export default Nav

import {FaTelegramPlane } from 'react-icons/fa'
import '../css/nav.css'


function Nav({isopen , theme}){
    return (
        <div className={theme?"nav_bar light_nav":'nav_bar'} style={{display:isopen?'flex':'none'}}>
            <ul>
                <li><a href='/emergency_responders'>Nothelfer</a></li>
                <li><a href='/vku'>VKU</a></li>
                <li><a href='/moto'>Motorrad</a></li>
                <li><a href='/inspection_trip'>Kontrollfahrt</a></li>
                <li><a href='/pricing'>Preise</a></li>
                <li><a href='/contact'>Kontakt</a></li>
                <li><a href='/about'>Über uns</a></li>
                <li><a href='/trial_lesson'>Fordere jetzt eine Probelektion an.</a></li>
                <li><a href='/register'>Anmeldenung</a></li>
            </ul>
            <br /><br /><br />
            <div className="contact">
                <div className="image">
<FaTelegramPlane size={30} />
                </div>
                <div className="info_contact">
                    <p className='title_'>Wir sind viel näher dran</p>
                    <p className='subtitle'>Kontaktieren Sie uns per Telegram</p>
                </div>
            </div>
        </div>
    )
}

export default Nav

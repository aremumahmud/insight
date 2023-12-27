import '../css/nav.css'


function Nav({isopen}){
    return (
        <div className="nav_bar" style={{display:isopen?'flex':'none'}}>
            <ul>
                <li><a href='/emergency_responders'>Emergency Responders</a></li>
                <li><a href='/vku'>VKU</a></li>
                <li><a href='/automobile'>Automobile</a></li>
                <li><a href='#'>Taxi</a></li>
                <li><a href='/checktrip'>Check trip</a></li>
                <li><a href='/moto'>Moto</a></li>
                <li><a href='/pricing'>Pricing</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Registration</a></li>
            </ul>
            <br /><br /><br />
            <div className="contact">
                <div className="image"></div>
                <div className="info_contact">
                    <p className='title_'>We are much closer</p>
                    <p className='subtitle'>Contact us via Telegram</p>
                </div>
            </div>
        </div>
    )
}

export default Nav
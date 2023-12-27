import '../css/nav.css'

function Nav({isopen}){
    return (
        <div className="nav_bar" style={{display:isopen?'flex':'none'}}>
            <ul>
                <li>Emergency Responders</li>
                <li>VKU</li>
                <li>Automobile</li>
                <li>Taxi</li>
                <li>Check trip</li>
                <li>Moto</li>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Registration</li>
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
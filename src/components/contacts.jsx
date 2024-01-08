import Jumbo from "./jumbo"
import card from '../images/banner.jpg'
import Article from "./article"
import ContactCard from "./contact_card"
import VideoIframe from "./video_tutorial"
import ContactForm from "./contact_form"

let phone = '+41 56 611 99 77'
let email = 'info@fahrschule-star.ch'
let web = 'fahrschule-star.ch'

let contact_data = [{
    title:'Baden',
    address:`Fahrschule Star Güterstrasse 12 5430 Wettingen`,
    phone:'+41 56 611 99 77',
    email:'info@fahrschule-star.ch',
},{
    title:'Winterthur',
    address:`Fahrschule Star
    Stadthausstrasse 125/127
    8400 Winterhur`,
    phone:'+41 56 611 99 77',
    email:'info@fahrschule-star.ch',
},{
    title:'Zürich',
    address:`Fahrschule Star
    Gubelstrasse 50
    Im Gubelhof Oerlikon
    8050 Zürich`,
    phone:'+41 56 611 99 77',
    email:'info@fahrschule-star.ch',
}]

function ContactUs({theme}){
    return (
        <>
          <Jumbo theme={theme} image={card} text={'Contact Us'} />
          <Article theme={theme} title={'You can contact us at :'}>
            {
                contact_data.map(contact=>  <ContactCard  theme={theme} title={contact.title} address={contact.address} email={contact.email} phone={contact.phone} />)
            }
<br /><br />
            <VideoIframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.0643738595736!2d8.316525915503064!3d47.469174979175726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47906cd100bcd627%3A0xd76602dda1ba1c1b!2sLandstrasse%2020%2C%205430%20Wettingen%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1592831974614!5m2!1sen!2sin'} />
          
            
          </Article>
           <Article  theme={theme} top={true} title={'Contact us'} content={[
              'In order that for the most part, any one of us will come to the exercise of any kind of employment except to take advantage of the objectives from it. The pain will condemn in pleasure, but it wants to be clumsy. Blacks are the exception.'
           ]}>
            <div  className={theme?"contact_card light_card":"contact_card"}>
            <div className="socials">
            <div>
                <p>Email: <span><a href={"mailto:" + email}>{email}</a></span></p>
            </div>
            <div>
                <p>Telephone: <span><a href={"tel:"+phone}>{phone}</a></span></p>
            </div>
            <div>
                <p>Web: <span><a href={'https://'+web}>{web}</a></span></p>
            </div>
          </div>
            </div>
            <br />
            <p className="title">Send us Messages .</p>
            <br />
            <ContactForm theme={theme} />
           </Article>
          </>
    )
}


export default ContactUs
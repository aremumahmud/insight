import '../css/contactCard.css'

function ContactCard({title , address , email , phone}){
    return (
        <div className="contact_card">
          <p className="contact_title">
            {title}: 
          </p>
          <p className="address">
        {address}
          </p>
          <div className="socials">
            <div>
                <p>Email: <span><a href={"mailto:" + email}>{email}</a></span></p>
            </div>
            <div>
                <p>Telephone: <span><a href={"tel:"+phone}>{phone}</a></span></p>
            </div>
          </div>
        </div>
    )
}


export default ContactCard
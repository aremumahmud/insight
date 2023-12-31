import '../css/contact_form.css'

function ContactForm(){
    return (
      <div className="contact_form">
       <input type="text" name="" id="" placeholder='Name'/>
       <input type="email" name="" id="" placeholder='Email' />
       <input type="text" name="" id="" placeholder='Subject' />
       <input type="tel" name="" id="" placeholder='Phone Number'/>
       <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
       <div className="button ">
        Send Messages
       </div>
      </div>
    )
}

export default ContactForm
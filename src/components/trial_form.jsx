import { useEffect } from 'react';
import '../css/trial_form.css'
 import ScrollReveal from 'scrollreveal';

function TrialForm({theme}){
   
      useEffect(() => {
          // Configure the scroll reveal animation
          ScrollReveal().reveal('.form_entry', {
            delay: 200,
            origin: 'bottom',
            duration: 800,
            scale: 1,
            class:'form_title'
          });
        }, []);
    return (
        <div className={theme?"trial_form light_trial":"trial_form"}>
          <div className="form_title">
          Fordere jetzt eine Probelektion an .
          </div>
          <form action="">
            <div className="form_entry">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Type Here' />
            </div>
            <div className="form_entry">
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder='Type here' />
            </div>
            <div className="form_entry">
                <label htmlFor="">Geburtsdatum</label>
                <input type="date" placeholder='mm/dd/yyyy' />
            </div>
            <div className="form_entry">
                <label htmlFor="">Telefonnummer*</label>
                <input type="tel" placeholder='Telefonnummer*' />
            </div>
            <div className="form_entry">
                <label htmlFor="">Wo möchtest du fahren?</label>
                <select>
                    <option>Bitte auswahlen</option>
                </select>
            </div>
            <div className="form_entry">
                <label htmlFor="">Kategorie*<sup>*</sup></label>
                <select>
                    <option>Bitte auswahlen</option>
                </select>
            </div>
            <div className="form_entry">
                <label htmlFor="">Ich bin Verfügbar</label>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Jeden Tag</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Morgens ( 08:00 - 12:00 )</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Vor-/Nachmittags ( 12:00 - 17:00 ) </p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Abends  ( 17:00 - 21:00 )</p>
                </div>
                
            </div>
            <div className="form_entry">
                <label htmlFor="">Tag auswählen</label>
                <div className="grid">
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Tag auswählen</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Montag</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Dienstag </p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Mittwoch</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Donnerstag</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Freitag</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Samstag</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Sonntag(nur Motorrad)</p>
                </div>
                </div>
               
                
            </div>
            <div className="form_entry" style={{marginBottom:0}}>
                <label htmlFor="">Nachricht</label> 
                <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
            </div>
            <div className="button1" style={{marginLeft:'1rem',marginTop:0}}>
        Senden
       </div>
          </form>
        </div>
    )
}


export default TrialForm
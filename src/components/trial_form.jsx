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
          Request A Trial Lesson Now .
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
                <label htmlFor="">Date of Birth</label>
                <input type="date" placeholder='mm/dd/yyyy' />
            </div>
            <div className="form_entry">
                <label htmlFor="">Phone Number</label>
                <input type="tel" placeholder='Phone Number' />
            </div>
            <div className="form_entry">
                <label htmlFor="">Where do you want to go?</label>
                <select>
                    <option>Please select</option>
                </select>
            </div>
            <div className="form_entry">
                <label htmlFor="">Category<sup>*</sup></label>
                <select>
                    <option>Please select</option>
                </select>
            </div>
            <div className="form_entry">
                <label htmlFor="">I Am Available</label>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Select all</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Morning ( 08:00 - 12:00 )</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Afternoon ( 12:00 - 17:00 ) </p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Evening  ( 17:00 - 21:00 )</p>
                </div>
                
            </div>
            <div className="form_entry">
                <label htmlFor="">Select Day</label>
                <div className="grid">
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Select Day</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Monday</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Tuesday </p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Wednesday</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Thursday</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Friday</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Saturday</p>
                </div>
                <div className="check_me">
                    <input type="checkbox" name="" id="" />
                    <p>Sunday</p>
                </div>
                </div>
               
                
            </div>
            <div className="form_entry" style={{marginBottom:0}}>
                <label htmlFor="">Message</label> <br/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
            </div>
            <div className="button1" style={{marginLeft:'1rem',marginTop:0}}>
        Submit
       </div>
          </form>
        </div>
    )
}


export default TrialForm
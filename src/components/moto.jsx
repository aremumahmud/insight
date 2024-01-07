import Jumbo from "./jumbo"
import bike from '../images/caf6a39393a7592b8afe8ea66f29c6ca.jpg'
import Article from "./article"
import VideoIframe from "./video_tutorial"
import {FaMotorcycle} from 'react-icons/fa'
import VKUCard from "./vkucard"
import BulletCard from "./bullet_card"
import NormCard from "./normCard"
import TextImage from "./text_image"
import ImageNorm from '../images/Partner_Hauptlin.png'
import SlideText from "./SlidedText"

let data = {
  title:'Motorcycle course for the Aarau, Baden and Zurich region .',
  content: ['The Star driving school has established itself in the basic motorcycle course area for the regions of Aarau, Baden and Zurich and is the point of contact for an entertaining and interesting course. The courses are structured close to the exam and structured in an instructive manner. With a lot of fun and humor, the hours fly by.']
}

let card_data = [{
  title:'Motorbike trial course',
  content:['Motorcycling is not just a way to get around, it is passion and embodies a feeling of freedom.In this course we show you the first steps and impart the necessary know-how and the ability to move a motorcycle.With a lot of humor we combine theory with practice in such a way that you would like to keep going all day long.']
},{
  title:'Basic Motorcycle Courses',
  content:['In categories A1 and A, you must complete the practical basic course within four months of the date of issue of the learning driving license. It is 8 hours for category A1 and 12 hours for category A.With a category A learning driving license, you may not complete the basic training with a category A1 vehicle.']
},{
  title:'Motorcycle Curve Training',
  content:['Cornering is the most beautiful thing about motorcycling. With the right technology, safety, fun and joy increase. We practice that on this daily course. We learn to consciouslyWith high-tech and know-how, we show you how beautiful cornering can be.']
}]


let req_data = [{
  title:'Category A1'
  ,content:['Motorcycle helmet (tested according to ECE regulation 22)',
  'Motorcycle gloves or gloves made from abrasion and tear-resistant material',
  'Robust jacket and trousers made of abrasion and tear resistant material',
  'Motorbike boots or ankle-protecting, sturdy shoes']
},{
  title:'Category A And A Limited (35KW)',
  content:['Motorcycle helmet (tested according to ECE regulation 22)',
'Motorcycle gloves or gloves made from abrasion and tear-resistant material',
'Motorcycle jacket','Motorcycle pants','Motorbike boots or ankle-protecting, sturdy shoes']
}]


let moto_data=[{
  title:'Vehicle Cat. A',
  content:'A 2-wheeled, 2-seater motorcycle without a sidecar with an engine power of at most 35 kW and a ratio of engine power and unladen weight of not more than 0.20 kW / kg. No motorcycle in subcategory A1.'
},{
  title:'Vehicle Cat. A',
  content:'A motorcycle without a sidecar with an engine output of at least 35 kW and two seats.'
},{
  title:'Vehicle Category A1',
  content:'A two-wheel motorcycle without a sidecar with a maximum displacement of 125 cm3 and an engine output of maximum 11 kW. (For handlebars 18 years at most 50 cm3).'
}]

function Moto(){
    return (
        <>
          <Jumbo image={bike} text={'Moto'} />
          <Article title={data.title} content={data.content}/>
          <VideoIframe src={'https://www.youtube.com/watch?v=MCABhYXoYrI'}/>
          <br /><br /><br /><br />
          {
            card_data.map(dat => <VKUCard nobtn={true} Icon={FaMotorcycle} title={dat.title} content={dat.content} />)
          }
          <div className="topic">
            <p className="title">Motorcycle Test Requirements</p>
            <br />
            <SlideText word={'Clothing :'} classes={"title little"} />
          </div>
          <div>
            {
              req_data.map(req=><BulletCard content={req.content} title={req.title}/>)
            }
            
          </div>
          <div className="topic">
            <SlideText word={'Moto :'} classes={"title little"} />
            
          </div>
          <div>
          {
              moto_data.map(req=><NormCard content={req.content} title={req.title}/>)
            }
          </div>
          <TextImage upspace={true} background={true}  image={ImageNorm} reverse={true}>
           <SlideText word={'Rent A Motorcycle ?'} classes="title" style={{
            padding:'1.1rem',
            width:'70%',
            paddingBottom:0
      
           }}/>
           
          
           <p style={{
            padding:'1.1rem',
           lineHeight:1.5
      
           }}>You don't have your own motorcycle yet? Would you like to rent one for the course or even buy one later? Get in touch with our partner Hauptlin . He will provide a suitable motorcycle. For a reservation request, please contact Hauptlin directly: info@hauptlin.ch If you definitely decide to rent a motorcycle, you declare that you agree to the General Terms and Conditions of Hauptlin.</p>
           <br /><br />
          </TextImage>
        </>
    )
}


export default Moto
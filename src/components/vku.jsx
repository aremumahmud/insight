import Jumbo from "./jumbo"
import traffic from '../images/87aa725dba16e508c40ae8e55c9e9d58.jpg'
import Article from "./article"
import TextImage from "./text_image"
import VKUCard from "./vkucard"
import {FaRoad} from 'react-icons/fa'

let data = {
  title:'On VKU In The Baden Region and Zürich .',
  content: ['The compulsory traffic science lessons (VKU) consist of 4 double lessons and can be attended to accompany the practical driving lessons.',
'However, Traffic customer lessons (VKU) may only be attended with a valid learning driving license!',
'For legal reasons, the double lessons must take place on four different days. Register now and benefit from our cheap course offers']
}

let card_data = [
  {
    title:'Course Part',
    content:['Book VKU',
    'Functions of the sensory organs'],
    image:''
  },
  {
    title:'Course Part',
    content:[`Partner customer`,
      'Street customer',
      'Weather',
     ' Times'],
    image:''
  },
  {
    title:'Course Part',
    content:['Condition of the vehicle',
    'Forces when driving',
    'Traffic movement theory'],
    image:''
  },
  {
    title:'Course Part',
    content:['Drivability',
'Environmentally conscious',
'Driving'],
    image:''
  }
]

function VKU(){
    return (
        <>
          <Jumbo image={traffic} text={'Traffic Studies (VKU)'} />
          <Article title={data.title} content={data.content}/>
          {
            card_data.map(dat => <VKUCard Icon={FaRoad} title={dat.title} content={dat.content} />)
          }
         
          <TextImage upspace={true} background={true}  reverse={true}>
           <div className="title" style={{
            padding:'1.1rem',
            width:'70%',
            paddingBottom:0
      
           }}>
           You can easily book your traffic studies online .
           </div>
           <div className="button back_color" style={{ margin:'1.1rem'}}>
           Book Course
           </div>
           <br /><br />
          </TextImage>
        </>
    )
}


export default VKU
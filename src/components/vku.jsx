import Jumbo from "./jumbo"
import traffic from '../images/87aa725dba16e508c40ae8e55c9e9d58.jpg'
import Article from "./article"
import TextImage from "./text_image"
import VKUCard from "./vkucard"
import {FaRoad} from 'react-icons/fa'

let data = {
  title:'VKU in der Region Baden und Zürich .',
  content: ['Der obligatorische Verkehrskundeunterricht (VKU) besteht aus vier Doppellektionen und kann begleitend zum praktischen Fahrunterricht besucht werden. Es empfiehlt sich jedoch, den VKU möglichst früh zu besuchen, damit wichtige Informationen bei der praktischen Fahrausbildung angewendet werden können.',`Der VKU darf nur mit einem gültigen Lernfahrausweis besucht werden. Dieser muss in den VKU mitgebracht werden.
  Seit dem ersten Januar 2021, dürfen die Kurse auch an zwei Abenden à vier Stunden durchgeführt werden.`]
}

let card_data = [
  {
    title:'Kursteil',
    content:['Gefahrenlehre/Sicherheitslehre',
    'Funktionen der Sinnesorgane'],
    image:''
  },
  {
    title:'Kursteil',
    content:[`Partnerkunde`,
      'Strassenkunde',
      'Witterung',
     'Zeiten'],
    image:''
  },
  {
    title:'Kursteil',
    content:['Zustand des Fahrzeugs',
    'Kräfte beim Fahren',
    'Verkehrsbewegungslehre'],
    image:''
  },
  {
    title:'Kursteil',
    content:['Fahrfähigkeit',
'Umweltbewusstes Fahren',
'Fahren'],
    image:''
  }
]

function VKU({theme}){
    return (
        <>
          <Jumbo theme={theme} image={traffic} text={'VERKEHRSKUNDEUNTERRICHT (VKU)'} />
          <Article theme={theme} title={data.title} content={data.content}/>
          {
            card_data.map(dat => <VKUCard theme={theme} Icon={FaRoad} title={dat.title} content={dat.content} />)
          }
         
          <TextImage upspace={true} background={true}  reverse={true}>
           <div className="title" style={{
            padding:'1.1rem',
            width:'70%',
            paddingBottom:0
      
           }}>
           Jetzt Termin für den VKU buchen .
           </div>
           <div className="button back_color" style={{ margin:'1.1rem'}}>
           Buchen
           </div>
           <br /><br />
          </TextImage>
        </>
    )
}


export default VKU
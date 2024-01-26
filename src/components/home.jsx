import ParallaxImage from "./cards"
import HeroSection from "./heroSection"
import first_aid from '../img/1.jpg'
import driving_traffic from '../images/a844739d2275fbf6dd41cc8ecd47951e.jpg'
import traffic from '../img/2.jpg'
import bike from '../img/3.jpg'
import card from '../images/a560de56786d9472f3aada67e829e3f4.jpg'
import price from '../images/ef2752d28f8e6da8bef7e4572051b38e.jpg'

import {ParallaxProvider , Parallax} from 'react-scroll-parallax'


let data  = [{
    title: 'Nothelfer',
    tags: ['Gesundheit' , 'Leben'],
    image: first_aid
  },{
    title: 'Lerne Auto fahren und die Verkehrsregeln',
    tags: ['Fahren' , 'Verkehr' , "Sicher"],
    image: driving_traffic
  },
  {
    title: 'Buche deine Termine für den Verkehrskundeunterricht (VKU) in deiner Region',
    tags: ['VKU' , 'Verkehr' , "Baden"],
    image: traffic
  },
  {
    title: 'Motorradkurs für die Region Aarau, Baden und Zürich',
    tags: ['Motorrad' , 'Aarau' , "Baden"],
    image: bike
  },
  {
    title: 'Preise: Drive today - pay tomorrow',
    tags: ['Preise' , 'Farhen' ],
    image: price
  },
  {
    title: 'Gutscheine Bequem Online Kaufen',
    tags: ['Online' , 'Kaufen' ],
    image: card
  }]
function Home({theme}){
    return (
        <ParallaxProvider>
            <Parallax y={[60, 60]} tagOuter='figure'>
                <HeroSection theme={theme} />
                <div>
                    {
                    data.map(item=> <ParallaxImage theme={theme} title={item.title} tags={item.tags} image={item.image} />)
                }
                </div>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />            </Parallax>
        
        </ParallaxProvider>
    )
}

export default Home
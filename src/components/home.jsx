import ParallaxImage from "./cards"
import HeroSection from "./heroSection"
import first_aid from '../images/91c77f9d95bf34e4ba7f1c471d5b2bd8.jpg'
import driving_traffic from '../images/a844739d2275fbf6dd41cc8ecd47951e.jpg'
import traffic from '../images/87aa725dba16e508c40ae8e55c9e9d58.jpg'
import bike from '../images/caf6a39393a7592b8afe8ea66f29c6ca.jpg'
import card from '../images/a560de56786d9472f3aada67e829e3f4.jpg'
import price from '../images/ef2752d28f8e6da8bef7e4572051b38e.jpg'

import {ParallaxProvider , Parallax} from 'react-scroll-parallax'


let data  = [{
    title: 'First Aid',
    tags: ['Health' , 'Life'],
    image: first_aid
  },{
    title: 'Driving And Traffic Rules',
    tags: ['Driving' , 'Traffic' , "Safe"],
    image: driving_traffic
  },
  {
    title: 'Traffic studies (VKU) in the Baden Region',
    tags: ['VKU' , 'Traffic' , "Baden"],
    image: traffic
  },
  {
    title: 'Motorcycle course for the Aarau, Baden and Zurich region',
    tags: ['Motor' , 'Aarau' , "Baden"],
    image: bike
  },
  {
    title: 'Price: Drive today - pay tomorrow',
    tags: ['Price' , 'Driving' ],
    image: price
  },
  {
    title: 'Gutscheine Bequem Online Kaufen',
    tags: ['Online' , 'Kaufen' ],
    image: card
  }]
function Home(){
    return (
        <ParallaxProvider>
            <Parallax y={[60, 60]} tagOuter='figure'>
                <HeroSection />
                <div>
                    {
                    data.map(item=> <ParallaxImage title={item.title} tags={item.tags} image={item.image} />)
                }
                </div>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />            </Parallax>
        
        </ParallaxProvider>
    )
}

export default Home
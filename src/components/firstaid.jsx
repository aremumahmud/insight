import Jumbo from "./jumbo"
import first_aid from '../images/91c77f9d95bf34e4ba7f1c471d5b2bd8.jpg'
import Article from "./article"
import VideoIframe from "./video_tutorial"
import AppleGoogle from "./app_goog"
import TextImage from "./text_image"
import Image3D from '../images/ucademy-3D-animation-low.gif'
import ImageNorm from '../images/uss-img.png'
import SlideText from "./SlidedText"


let data = {
  title:'First Aid Course In Aargau and Zürich For Only 69 .',
  content:["We offer the first aid course (NHK) in the Baden region and Zürich at an affordable price. For only 69.- (including ID) you learn first aid, which is mandatory for the acquisition of a driver's license.",
'A study has shown that over 80% of the population is unable to provide correct first aid! Do you know how the side position works and when it is used? Or could you use the vital cardiac massage?',
"The first aid course is also a prerequisite for applying for a learning driving license."]
}

let data2 = {
  title:'The Ultimate Update .',
  content: ['Finally there is an update for the dusty first aid course: the first aid course 3.0.Do you want to learn how to provide emergency aid using the latest technologies?',
`Do you want to learn how to provide emergency aid using the latest technologies? Then you are exactly right here. Instead of a course book, we work with the smartphone and dive into virtual reality, learn using 3D animations and work with digital exercises.

We say: use your smartphone and don't put it away!` , 'If you are taking part in the course, please install the ucademy “NHK 2.0” app before the start of the course']
}


function FirstAid(){
    return (
        <>
          <Jumbo image={first_aid} text={'First Aid'} />
          <Article title={data.title} content={data.content}/>
          <VideoIframe src={'https://www.youtube.com/embed/uLESrpuNsIs?autoplay=1&amp;feature=oembed'} />
          <Article title={data2.title} content={data2.content}>
            <AppleGoogle />
            <TextImage  title={'Important Notice !'} image={Image3D} text={'Download the course material in the app after installation. The best way to do this is in the WLAN, since there is greater data usage. Also bring your info@ucademy.ch'}  />
          </Article>
          <TextImage upspace={true} background={true}  image={ImageNorm} reverse={true}>
           <SlideText style={{
            padding:'1.1rem',
            width:'70%',
            paddingBottom:0
      
           }} classes={"title"} word={"You Can Easily Book Your First Aid Course Online ."}/>
          
           <div className="button back_color" style={{ margin:'1.1rem'}}>
            Submit
           </div>
           <br /><br />
          </TextImage>
        </>
    )
}


export default FirstAid
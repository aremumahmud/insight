import Jumbo from "./jumbo"
import first_aid from '../img/1.jpg'
import Article from "./article"
import VideoIframe from "./video_tutorial"
import AppleGoogle from "./app_goog"
import TextImage from "./text_image"
import Image3D from '../images/ucademy-3D-animation-low.gif'
import ImageNorm from '../images/uss-img.png'
import SlideText from "./SlidedText"


let data = {
  title:'Nothelferkurs für die Region Aarau, Baden und Zürich für nur CHF 69 .',
  content:[`Den Nothelferkurs (NHK) bieten wir in den Regionen Aarau, Baden und Zürich zu einem günstigen Preis an. Für nur CHF 69.– (inklusive Ausweis) erlernt man die erste Hilfe, welche für den Erwerb eines Führerausweises obligatorisch ist.`,`Eine Studie hat gezeigt, dass über 80 % der Bevölkerung nicht in der Lage ist, korrekte Erste Hilfe zu leisten! Weisst du, wie die Seitenlage funktioniert und wann diese angewendet wird? Oder könntest du die lebenswichtige Herzdruckmassage anwenden?

  Der Nothelferkurs ist zudem Voraussetzung, um einen Lernfahrausweis beantragen zu können.`, `Der Nothelferkurs ist zudem Voraussetzung, um einen Lernfahrausweis beantragen zu können.

  `]
}

let data2 = {
  title:'The Ultimate Update .',
  content: [`Endlich kommt ein Update für den verstaubten Nothelferkurs: der Nothelferkurs 3.0.

  Eine Studie hat gezeigt, dass über 80 % der Bevölkerung nicht in der Lage ist, korrekte Erste Hilfe zu leisten! Weisst du, wie die Seitenlage funktioniert und wann diese angewendet wird?` , `Oder könntest du die lebenswichtige Herzdruckmassage anwenden?

  Bei uns heisst es: das Smartphone benutzen und nicht weglegen!
  
  Wenn du am Kurs teilnimmst, bitte vor Kursbeginn die App «NHK 2.0» von ucademy installieren.`]
}


function FirstAid({theme}){
    return (
        <>
          <Jumbo theme={theme} image={first_aid} text={'Nothelfer'} />
          <Article theme={theme} title={data.title} content={data.content}/>
          <VideoIframe  src={'https://www.youtube.com/embed/uLESrpuNsIs?autoplay=1&amp;feature=oembed'} />
          <Article theme={theme}  title={data2.title} content={data2.content}>
            <AppleGoogle />
            <TextImage  title={'Wichtiger Hinweis!'} image={Image3D} text={`Laden Sie das Kursmaterial nach der Installation in der App herunter. Dies geht am besten im WLAN, da dort ein höherer Datenverbrauch anfällt. Bringen Sie auch Ihre info@ucademy.ch mit`}  />
          </Article>
          <TextImage upspace={true} background={true}  image={ImageNorm} reverse={true}>
           <SlideText style={{
            padding:'1.1rem',
            width:'70%',
            paddingBottom:0
      
           }} classes={"title"} word={"Jetzt Termin für den Nothelferkurs buchen ."}/>
          
           <div className="button back_color" style={{ margin:'1.1rem'}}>
            Buchen
           </div>
           <br /><br />
          </TextImage>
        </>
    )
}


export default FirstAid
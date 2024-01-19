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
  title:'Motorradkurs für die Region Aarau, Baden und Zürich .',
  content: [`Die Fahrschule Star hat sich im Bereich Motorradgrundkurs für die Regionen Aarau, Baden und Zürich etabliert und ist die Anlaufstelle für einen unterhaltsamen und interessanten Kurs.`,
` Die Kurse sind prüfungsnah aufgebaut und lehrreich gegliedert. Mit viel Spass und Humor vergehen die Stunden wie im Flug. Viele unterschätzen das sehr hohe Niveau, welches in der Schweiz an der Prüfung gefragt ist. Im vergangenen Jahr betrug die Durchfallsquote sagenhafte 56 %!`,` Wir haben unseren Motorradgrundkurs so aufgebaut, dass man praktisch keine Fahrstunden mehr benötigt (sofern man die Kursziele erreicht und übt). Eine Prüfungsfahrtlektion gibt ein Gefühl, wie es an der Prüfung sein wird, und dient als Standortbestimmung.`]
}

let card_data = [{
  title:'Motorrad-Schnupperkurs',
  content:['Motorradfahren ist nicht nur eine Art, um sich fortzubewegen, es ist Leidenschaft und verkörpert ein Gefühl von Freiheit. In diesem Kurs zeigen wir dir die ersten Schritte und vermitteln das nötige Know-how und die Fähigkeit, ein Motorrad zu bewegen. Mit viel Humor kombinieren wir die Theorie mit der Praxis so, dass du am liebsten noch den ganzen Tag weitermachen möchtest.']
},{
  title:'Motorrad-Grundkurse',
  content:['Bei den Kategorien A1 und A beschränkt ist innerhalb von vier Monaten ab Ausstellungsdatum des Lernfahrausweises der praktische Grundkurs zu absolvieren. Es sind seit dem 1. Januar 2021 für alle Kategorien zwölf Stunden in jeweils drei Teilen à vier Stunden zu besuchen. Danach verlängert sich die Gültigkeit des Lernfahrausweises automatisch um ein Jahr. Der Grundkurs läuft nicht mehr aus, sondern bleibt ein Leben lang gültig. Leider ist aber ein Direkteinstieg in die Kategorie A nicht mehr möglich. Mit einem Lernfahrausweis der Kategorie A beschränkt darf man die Grundschulung nicht mit einem Fahrzeug der Kategorie A1 absolvieren.']
},{
  title:'Motorrad-Kurventraining',
  content:['Kurvenfahren ist das Schönste beim Motorradfahren. Mit der richtigen Technik erhöht sich die Sicherheit, der Spass und die Freude. Das üben wir an diesem Tageskurs. Wir lehren, die Kurven bewusst zu realisieren und diese auf einer sicheren Linie zu durchfahren. Ziel ist, Kurven möglichst rund und dynamisch zu fahren. Mit Hightech und Know-how zeigen wir dir, wie schön Kurvenfahren sein kann.']
}]


let req_data = [{
  title:'Kategorie A1'
  ,content:[`Motorradhelm (geprüft nach ECE-Reglement 22)`,`Motorradhandschuhe oder Handschuhe aus abrieb- und reissfestem Material`,`Robuste Jacke und Hose aus abrieb- und reissfestem Material`, `Motorradstiefel oder knöchelschützendes, festes Schuhwerk`]
},{
  title:'Kategorie A und A beschränkt (35 kW)',
  content:[`Motorradhelm (geprüft nach ECE-Reglement 22)`, `Motorradhandschuhe oder Handschuhe aus abrieb- und reissfestem Material`, `Motorradjacke`, `Motorradhose`,`Motorradstiefel oder knöchelschützendes, festes Schuhwerk`]
}]


let moto_data=[{
  title:'Kategorie A',
  content:'Ein Motorrad ohne Seitenwagen mit einer Motorleistung von mindestens 35 kW, zwei Sitzplätzen und einem Verhältnis von Motorleistung und Leergewicht von mehr als 0,20 kW/kg.'
},{
  title:'Kategorie A (beschränkt)',
  content:'Ein zweirädriges, zweiplätziges Motorrad ohne Seitenwagen mit einer Motorleistung von höchstens 35 kW und einem Verhältnis von Motorleistung und Leergewicht von nicht mehr als 0,20 kW/kg. Kein Motorrad der Unterkategorie A1.'
},{
  title:'Kategorie A1',
  content:'Ein zweirädriges Motorrad ohne Seitenwagen mit einem Hubraum von höchstens 125 cm3 und einer Motorleistung von höchstens 11 kW. Für Lenker unter 16 Jahren höchstens 50 cm3 und max. 4 kW. Nach vollendetem 16. Lebensjahr ist man automatisch dazu berechtigt, ein Motorrad mit einem Hubraum von max. 125 cm3 und max. 11 kW zu führen.'
}]

function Moto({theme}){
    return (
        <>
          <Jumbo theme={theme} image={bike} text={'Motorrad'} />
          <Article  theme={theme}  title={data.title} content={data.content}/>
          <VideoIframe src={'https://www.youtube.com/watch?v=MCABhYXoYrI'}/>
          <br /><br /><br /><br />
          {
            card_data.map(dat => <VKUCard  theme={theme}  nobtn={true} Icon={FaMotorcycle} title={dat.title} content={dat.content} />)
          }
          <div className="topic">
            <p className="title" style={{fontSize:'2rem', fontWeight:'normal'}}>Anforderungen Motorradprüfung .</p>
            <br /><br />
            <SlideText style={{fontSize:'1.7rem', fontWeight:'normal'}} word={'Bekleidung :'} classes={"title little"} />
            <br />
          </div>
          <div>
            {
              req_data.map(req=><BulletCard content={req.content} title={req.title}/>)
            }
            
          </div>
          <div className="topic">
            <SlideText word={'Motorrad :'} classes={"title little"} style={{fontSize:'1.7rem', fontWeight:'normal'}} />
            <br />
          </div>
          <div>
          {
              moto_data.map(req=><NormCard content={req.content} title={req.title}/>)
            }
          </div>
          <TextImage upspace={true} background={true}  image={ImageNorm} reverse={true}>
           <SlideText word={'Motorrad mieten ?'} classes="title" style={{
            padding:'1.1rem',
            width:'70%',
            paddingBottom:0
      
           }}/>
           
          
           <p style={{
            padding:'1.1rem',
           lineHeight:1.5
      
           }}>Du besitzt noch kein eigenes Motorrad? Du möchtest für den Kurs eines mieten oder später sogar eines kaufen? Melde dich bei unserem Partner Hauptlin [link to https://www.hauptlin.ch/de/index.html]. Er wird dir ein passendes Motorrad bereitstellen. Für eine Reservationsanfrage direkt an Hauptlin wenden: info@hauptlin.ch [mail to info@hauptlin.ch] Wenn du dich definitiv entscheidest, ein Motorrad zu mieten, erklärst du dich mit den AGB [link to https://cdn.fahrschule-star.ch/wp-content/uploads/2018/01/Allgemeine-Vertragsbestimmungen-Miete-Fahrzeug.pdf -&gt; tbd] von Hauptlin einverstanden.</p>
           <br /><br />
          </TextImage>
        </>
    )
}


export default Moto
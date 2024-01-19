import Jumbo from "./jumbo"
import first_aid from '../images/inspect.jpg'
import Article from "./article"



let data = {
  title:'Vorbereitung auf die Kontrollfahrt bzw. Kontrollprüfung .',
  content:[`Wir bietet eine seriöse Vorbereitung auf die Kontrollfahrt bzw. Kontrollprüfung für die
  Umschreibung von ausländischen Führerausweisen in Schweizerische
  Führerausweise.`,`Wenn du deinen ausländischen Führerausweis in einen Schweizerischen
  umtauschen möchtest, solltest du dich ernsthaft auf die Kontrollfahrt bzw.
  Kontrollprüfung vorbereiten. Eine nicht bestandene Prüfung kann nicht wiederholt
  werden, sodass du mit der gesamten Prüfung von vorne beginnen müsstest.`,`Jedes Jahr kommen viele Besitzer ausländischer Führerausweise zu uns, um Hilfe
  bei der Umschreibung zu erhalten. Wir bereiten dich seriös auf die
  Kontrollfahrt/Kontrollprüfung vor. Du lernst das sichere Lenken auf Schweizer
  Strassen in einem modernen Fahrzeug mit Automatikgetriebe. Nach bestandener
  Prüfung darfst du auch Fahrzeuge mit Handschaltung fahren.`,`Melde dich bei uns, wir helfen dir gerne weiter!`]
}


function Inspect({theme}){
    return (
        <>
          <Jumbo theme={theme} image={first_aid} text={'Kontrollfahrt'} />
          <Article theme={theme}  title={data.title} content={data.content}/>
        
        </>
    )
}


export default Inspect
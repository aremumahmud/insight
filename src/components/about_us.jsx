import Jumbo from "./jumbo"
import card from '../images/banner.jpg'
import Article from "./article"
import Team from "./team"

import mige from '../images/IMG_2247.jpg'
import birol from '../images/IMG_2250.jpg'
import nidi from '../images/IMG_2252.jpg'
import fro from '../images/IMG.jpeg'
import joel from '../images/IMG_6348.jpg'
import tettina from '../images/IMG_6374.jpg'

let team_data = [{
    email:'mige@fahrschule-star.ch',
    phone:'+41797886699',
    image:mige,
    name:'MIGE',
    attributes:'Mige, Entschuldigung, Captain Mige ist ein waschechter Seeräuber. Er sieht nicht nur aus wie ein Pirat, er spricht auch so. Dies liegt nicht daran, dass er einen Sprachfehler hat, sondern daran, dass er mehrere Sprachen spricht und diese immer wieder durcheinander bringst. Wenn er nicht gerade in der Karibik auf Schatzsuche ist fährt er mit seiner Black Perl durchs Prüfungsgebiet und foltert seine Schüler.'
},{
  email:'birol@fahrschule-star.ch',
  phone:'+41763445544',
  image:birol,
  name:'BIROL',
  attributes:'Ein Kanake der in Berlin lebte und in der Schweiz Fahrlehrer ist, was für eine kombination. Warum Birol sich Bärol nennt habe etwas mit einem Bären zu tun, was genau wissen wir nicht vielleicht weil er genau so gefährlich ist?! Für uns ist er eher zu vergleichen mit einer Pistazie (Zutat für Baklava) aussen hart innen sau lecker.'}
  ,{
    email:'nidi@fahrschule-star.ch',
    phone:'+41762266944',
    image:nidi,
    name:'NIDI',
    attributes:'Ja, Nidi ist sein Name. Wie es zu diesem Namen kam, weiss nicht mal er selbst. In seinem alten Beruf hat er etwas zu viel an den Pneus gerochen, ansonsten können wir es uns nicht erklären, warum er Fahrlehrer werden wollte.    '
},{
  email:'fro@fahrschule-star.ch',
  phone:'+41768305516',
  image:fro,
  name:'FRO',
  attributes:'Fro, Furkan, ja wie denn nun?! Ach komm ... «Der Türke» war im früheren Leben Fitnessinstruktor. Jetzt nervt er hier rum und verkauft uns Proteinshakes und gesunde Sachen. Ich weiss nicht, was der will, aber das passt nicht zum Fahrlehrersein - wir sind faul und dick.'},
{
  email:'joel@fahrschule-star.ch',
phone:'+41791018080',
image:joel,
name:'JOEL',
attributes:'Wenn er nicht gerade im Bentley durch die Normandie fährt und Louis Vuitton Taschen verkauft dann hängt er in seinem viel zu engem Spiderman-Kostüm am Eifelturm. Wärend den Fahrstunden jagt er seine Schüler mit dem Baguette durch den Verkehr und singt auf seiner albanischen Ukulele „ale le bleu“'},
{ email:'tettina@fahrschule-star.ch',
phone:'+41796470518',
image:tettina,
name:'TETTINA',
attributes:'Spieglein Spieglein an der Wand, wer ist die schönste Fahrlehrerin im ganzen Land? Tettin vo Prishtin 👐🏼 Nach der Misswahl zur Miss Prishtina wechselte sie ihren job und wurde Käserin oder so etwas in der Art. Kurzes kleid, high heels und roter lippenstift, Bei ihr weiss man nie ob sie gerade am arbeiten ist oder an eine Modenshow geht. Bei Ihr bist du auf der sicheren Seite, denn kein Experte kann „nein“ zu tettina sagen'}]

function AboutUs({theme}){
    return (
        <>
          <Jumbo theme={theme}  image={card} text={'Über uns'} />
          <Article theme={theme}  bottom={true}  title={'Deine Fahrschule in Aarau, Baden, Winterthur und Zürich .'} 
          content={['Wir haben zum Ziel gesetzt jedem, unabhängig von seiner finanziellen Situation, die Fahrausbildung zu ermöglichen.']}/>
          <Article theme={theme}  top={true} title={'Unser Superteam .'} content={[`Die Fahrschule Star arbeitet nur mit ausgewählten Fahrlehrern und Instruktoren zusammen. Bei den Fahrlehrern und Instruktoren achten wir darauf, dass jeder in seinem Gebiet spezialisiert und sehr stark ist. So gewährleisten wir eine hohe Qualität und können unseren Schülern weiterhin einen hohen Standard bieten. Durch eine lockere, kollegiale und humorvolle Atmosphäre kommt man bei uns mit viel Spass und Humor rasch ans Ziel.`]} />
          {
            team_data.map(team=> <Team theme={theme}  phone={team.phone} email={team.email} name={team.name} attributes={team.attributes} image={team.image} />)
          }
          
          </>
    )
}


export default AboutUs
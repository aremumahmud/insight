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

function AboutUs(){
    return (
        <>
          <Jumbo image={card} text={'About Us'} />
          <Article bottom={true}  title={'Super Driving Instructor For Super Learner Drivers .'} content={['We have set the goal of making driver training possible for everyone, regardless of their financial situation']}/>
          <Article top={true} title={'Our Creative Team .'} content={[`The Star driving school only works with selected driving instructors and instructors. With the driving instructors and instructors, we make sure that everyone is specialized in their area and very strong. This is how we ensure high quality and can continue to offer our students a high standard. With a relaxed, collegial and humorous atmosphere, you can quickly reach your goal with a lot of fun and humor.`]} />
          {
            team_data.map(team=> <Team phone={team.phone} email={team.email} name={team.name} attributes={team.attributes} image={team.image} />)
          }
          
          </>
    )
}


export default AboutUs
import Jumbo from "./jumbo"
import card from '../images/a560de56786d9472f3aada67e829e3f4.jpg'
import Article from "./article"
import Team from "./team"


let team_data = [{
    image:card,
    name:'MIGE',
    attributes:'Mige, Entschuldigung, Captain Mige ist ein waschechter Seeräuber. Er sieht nicht nur aus wie ein Pirat, er spricht auch so. Dies liegt nicht daran, dass er einen Sprachfehler hat, sondern daran, dass er mehrere Sprachen spricht und diese immer wieder durcheinander bringst. Wenn er nicht gerade in der Karibik auf Schatzsuche ist fährt er mit seiner Black Perl durchs Prüfungsgebiet und foltert seine Schüler.'
}]

function AboutUs(){
    return (
        <>
          <Jumbo image={card} text={'About Us'} />
          <Article bottom={true}  title={'Super Driving Instructor For Super Learner Drivers .'} content={['We have set the goal of making driver training possible for everyone, regardless of their financial situation']}/>
          <Article top={true} title={'Our Creative Team .'} content={[`The Star driving school only works with selected driving instructors and instructors. With the driving instructors and instructors, we make sure that everyone is specialized in their area and very strong. This is how we ensure high quality and can continue to offer our students a high standard. With a relaxed, collegial and humorous atmosphere, you can quickly reach your goal with a lot of fun and humor.`]} />
          {
            team_data.map(team=> <Team name={team.name} attributes={team.attributes} image={team.imagee} />)
          }
          
          </>
    )
}


export default AboutUs
import Jumbo from "./jumbo"
import card from '../images/a560de56786d9472f3aada67e829e3f4.jpg'

import TrialForm from "./trial_form"

function CheckTrip({theme}){
    return (
        <>
          <Jumbo theme={theme} image={card} text={'Probestunde'} />
          <br /> <br />
          <TrialForm theme={theme} />
          </>
    )
}


export default CheckTrip
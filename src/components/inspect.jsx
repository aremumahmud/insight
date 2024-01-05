import Jumbo from "./jumbo"
import first_aid from '../images/91c77f9d95bf34e4ba7f1c471d5b2bd8.jpg'
import Article from "./article"



let data = {
  title:'Preparation for the inspection trip or inspection test .',
  content:[`We offer serious preparation for the inspection trip or inspection test
  Converting foreign driving licenses into Swiss ones
  Driver's licenses.`,`If you convert your foreign driving license into a Swiss one
  If you want to exchange, you should seriously prepare for the inspection trip or
  Prepare control test. A failed exam cannot be repeated
  so you would have to start the entire exam from the beginning.`,`Every year many foreign driving license holders come to us for help
  obtained when rewriting. We prepare you seriously for this
  Inspection trip/inspection test. You will learn how to drive safely in Swiss
  Roads in a modern vehicle with an automatic transmission. After passing
  You are also allowed to drive vehicles with a manual transmission during the test.`,`Melde dich bei uns, wir helfen dir gerne weiter!`]
}


function Inspect(){
    return (
        <>
          <Jumbo image={first_aid} text={'Inspect Trip'} />
          <Article title={data.title} content={data.content}/>
        
        </>
    )
}


export default Inspect
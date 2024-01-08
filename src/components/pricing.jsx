import Jumbo from "./jumbo"
import price from '../images/ef2752d28f8e6da8bef7e4572051b38e.jpg'
import Article from "./article"
import PriceCard from "./pricecard"

let data = {
  title:'Pay Comfortably In Installments For All Driving Hours .',
  content:[`In today's era of mobility, it is almost mandatory to take the car test. On the way to acquiring the driver's license, you have to overcome a few hurdles such as the financial investment for driving lessons, theory testing, traffic studies and driving courses.`,
` The financial situation poses problems for many young people. The professional and private pressure to pass the exam as quickly as possible and the lack of financial resources are major obstacles.`,
` Studies have shown that, on average, you need a few hours more driving if you attend the driving school at irregular intervals. We offer a fair and customer-oriented solution to this problem - purchase on installments. Request driving lessons online and step on the gas. We will help you to pass the exam as soon as possible. You can only concentrate on driving and don't have to worry about the financial means.`,
` We shoot you the money and you pay back the amount comfortably in installments (up to 12 months). You do NOT have to sign a contract or anything like that.The only thing you have to do is choose a package online, add it to the shopping cart, select installment purchase, register and you're done. (positive credit check required) The lesson prices for paying in installments for the machine and the manually switched car are CHF 89 .- / lesson and in a 10-person subscription CHF 890.- The financial situation poses problems for many young people. The professional and private pressure to pass the exam as quickly as possible and the lack of financial resources are a major obstacle. Studies have shown that, on average, you need a few hours more driving if you attend the driving school at irregular intervals.`]
}

let pricing_data = [{
  title:'PRICES CAR (GEAR AND AUTOMAT)',
  subtitle:'NORMAL',
  content:['Individual lesson CHF 85.-','Double lesson CHF 170.-','10 subscription CHF 80.- per lesson (800.-)','20 subscription CHF 75.- per lesson (1500.-)']
},{
  title:'PRICE CONTROL, BPT 121 AND REFRESHING',
  subtitle:'NORMAL',
  content:['Individual lesson CHF 85','Double lesson CHF 170','10 subscription CHF 800','20 subscription CHF 1500']
},{
  title:'PRICE MOTORCYCLE',
  subtitle:'NORMAL',
  content:['Cat A driving lesson 45min. CHF 90.-','Cat A test drive 60min. CHF 100.-','Cat A1 driving lesson 45min. CHF 80.-','Cat A1 test drive 60min. CHF 90.-','Basic motorcycle course per course CHF 120.']
},{
  title:'PREISE AUTO (SCHALTUNG UND AUTOMAT)',
  subtitle:'SOCIAL MEDIA',
  content:['Individual lesson CHF 85.-','Double lesson CHF 160.-','subscription CHF 75.- per lesson (750.-)',' subscription CHF 70.- per lesson (1400.-)']
  ,book:true
},{
  title:'PRICE EMERGENCY COURSE NHK (INCLUDING ID)',
  content:[`We offer the first aid course (NHK) in the Baden region at an affordable price. For only 69.- (including ID) you learn first aid, which is mandatory for the acquisition of a driver's license .`],subtitle:"CHF 69.-",book:true
},{
  title:'PRICE TRAVEL CUSTOMER LESSONS VKU',
  content:['Traffic in the Baden region is like sand at the sea. To spice up this dry lesson so that you can get the course behind you with a lot of fun in a short time, we have hired a specialist who is a real ace in the field of VKU.'],subtitle:"CHF 140.-",book:true
}]

function Pricing({theme}){
    return (
        <>
          <Jumbo theme={theme}  image={price} text={'Pricing'} />
          <Article theme={theme}  warning={'Drive today - pay tomorrow'} title={data.title} content={data.content}/>
         {
          pricing_data.map(prices=><PriceCard theme={theme}  book={prices.book} title={prices.title} subtitle={prices.subtitle} content={prices.content||[]} /> )
         }
          
        </>
    )
}


export default Pricing
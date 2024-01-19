import Jumbo from "./jumbo"
import price from '../images/ef2752d28f8e6da8bef7e4572051b38e.jpg'
import Article from "./article"
import PriceCard from "./pricecard"

let data = {
  title:'Pay Comfortably In Installments For All Driving Hours .',
  content:[`In der heutigen Zeit der Mobilität ist es beinahe Pflicht, die Autoprüfung abzulegen. Auf dem Weg zum Erwerb des Führerausweises muss man aber einige Hürden bewältigen wie die finanzielle Investition in Fahrstunden, Theorieprüfung, Verkehrskunde und Fahrkurse. `,
` Die finanzielle Situation stellt viele junge Menschen vor Probleme. Der berufliche und private Druck, die Prüfung so schnell wie möglich zu bestehen, und die fehlenden finanziellen Mittel sind ein grosses Hindernis.`,
` Studien haben ergeben, dass man im Durchschnitt einige Fahrstunden mehr benötigt, wenn man in unregelmässigen Abständen die Fahrschule besucht. Wir bieten für diese Problematik eine faire und kundenorientierte Lösung: den Kauf auf Raten. Buche online Fahrstunden und gib Gas. Wir helfen dir, die Prüfung so rasch wie möglich zu bestehen. Dabei kannst du dich nur auf das Fahren konzentrieren und brauchst dir keine Sorgen um die finanziellen Mittel zu machen.`,
` Wir schiessen dir das Geld vor, und du bezahlst bequem in Raten (innerhalb zwölf Monaten) den Betrag zurück. Dabei musst du keinen Vertrag oder derartiges unterzeichnen. Das Einzige, was du tun musst, ist online ein Paket wählen, in den Warenkorb legen, Ratenkauf anwählen, anmelden und fertig (positive Bonitätsprüfung wird vorausgesetzt). Die Lektionspreise für die Ratenzahloption betragen für die Autofahrausbildung (Schaltung oder Automat) CHF 89.– pro Lektion und im 10er-Abo CHF 890.–.`]}

let pricing_data = [{
  title:'FAHRLEKTIONEN AUTO',
  subtitle:'AB CHF 75.-',
  content:[`Einzellektion: CHF 85.–`,`Doppellektion: CHF 170.–`,`10er-Abo: CHF 800.– (CHF 80.– pro Lektion)`,`20er-Abo: CHF 1500.– (CHF 75.– pro Lektion)`]
},{
  title:'KONTROLLFAHRT, BPT 121 UND AUFFRISCHUNG',
  subtitle:'PREISE',
  content:['Einzellektion: CHF 85.–','Doppellektion: CHF 170.–','10er-Abo: CHF 800.–','20er-Abo: CHF 1500.–']
},{
  title:'MOTORRAD',
  subtitle:'PREISE',
  content:['Kat. A: CHF 90.– für Fahrlektion à 45 Min.','Kat. A: CHF 100.– für Prüfungsfahrt à 60 Min.','Kat. A1: CHF 80.– für Fahrlektion à 45 Min.','Kat. A1: CHF 90.– für Prüfungsfahrt à 60 Min.','Motorrad-Grundkurs: CHF 120.– pro Kursteil']
},{
  title:'Administrationsgebühr',
  subtitle:'CHF 100.-',
  content:['Fallen nur einmalig an.',`Fallen erst bei beginn der Ausbildung an.`,`Decken jeglichen administrativen Aufwand ab.`,`Sind bei der Probelektion noch nicht zu begleichen.`]
  ,book:true
},{
  title:'NOTHELFERKURS (NHK)',
  content:[`Den Nothelferkurs (NHK) bieten wir für die Region Aarau, Baden und Zürich zu einem günstigen Preis an. Für nur CHF 69.– (inklusive Ausweis) erlernt man die Erste Hilfe, welche für den Erwerb eines Führerausweises obligatorisch ist.

  `],subtitle:"CHF 69.-",book:true
},{
  title:'VERKEHRSKUNDEUNTERRICHT (VKU)',
  content:['Verkehrskunde (VKU) in der Region Baden und Zürich gibt es wie Sand am Meer. Um diesen trockenen Unterricht etwas aufzupeppen, haben wir unsere Theorielokale so eingerichtet, dass du dich wie zu Hause fühlst, und den Unterricht so kurzweilig wie möglich gestaltet. Ja, es bleibt bei CHF 140.-. Es fallen keine zusätzlichen Kosten an.'],subtitle:"CHF 140.-",book:true
}]

function Pricing({theme}){
    return (
        <>
          <Jumbo theme={theme}  image={price} text={'Preise'} />
          <Article theme={theme}  warning={'Heute fahren - morgen bezahlen'} title={data.title} content={data.content}/>
         {
          pricing_data.map(prices=><PriceCard theme={theme}  book={prices.book} title={prices.title} subtitle={prices.subtitle} content={prices.content||[]} /> )
         }
          
        </>
    )
}


export default Pricing
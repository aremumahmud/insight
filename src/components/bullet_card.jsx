import '../css/bulletcard.css'
import SlideText from './SlidedText'


function BulletCard({title, content}){
    return (
        <div className="bullet_card_wrap">
            
             <div className="bullet_card">
          
           <SlideText word={title} classes={'title'} />
            <div className="bullet_entails">
                <ul>{
                content && content.map(cont=><li>{cont}</li>)
            }
                    </ul></div>
           <p style={{color:'black'}}>Motorradstiefel oder knöchelschützendes, festes Schuhwerk
Die Schutzanforderungen an die Bekleidung müssen auch beim Tragen der Regenbekleidung erfüllt sein.</p>
        </div>
        </div>
       
    )
}

export default BulletCard
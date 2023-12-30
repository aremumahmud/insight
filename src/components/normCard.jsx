import '../css/bulletcard.css'


function NormCard({title, content}){
    return (
        <div className="bullet_card_wrap">
            
             <div className="bullet_card">
           <br />
            <div className="title">{title}</div>
            <div className="bullet_entails">
                {content}
            </div>
          </div>
        </div>
       
    )
}

export default NormCard
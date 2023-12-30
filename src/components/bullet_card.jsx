import '../css/bulletcard.css'


function BulletCard({title, content}){
    return (
        <div className="bullet_card_wrap">
            
             <div className="bullet_card">
           <br />
            <div className="title">{title}</div>
            <div className="bullet_entails">
                <ul>{
                content && content.map(cont=><li>{cont}</li>)
            }
                    </ul></div>
           <p style={{color:'black'}}>The protective requirements for clothing must also be met when wearing rainwear..</p>
        </div>
        </div>
       
    )
}

export default BulletCard
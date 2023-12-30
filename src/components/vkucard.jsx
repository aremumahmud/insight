import '../css/vku_card.css'


function VKUCard({title, content , nobtn , Icon}){
    return (
        <div className="vku_card_wrap">
             <div className="vku_card">
            <div className="vku_image"><Icon size={40} /></div>
            <div className="title">{title}</div>
            <div className="vku_entails">{
                content && content.map(cont=><p>{cont}</p>)
            }</div>
            {!nobtn && <div className="button1 back_color" >Book VKU</div>}
            
        </div>
        </div>
       
    )
}

export default VKUCard
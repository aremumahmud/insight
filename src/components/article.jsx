import '../css/article.css'

function Article({title , content , children, warning ,top, bottom}){
    return (
        <div className="article" style={{paddingTop:top?'0px':'',paddingBottom:bottom?'1rem':''}}>
        <p className="warning">{warning}</p>
            <div className="article_title">{title}</div>
            <div className="article_content">{
                content && content.map(cont => <p>{cont}</p>)
            }</div>
            {children}
        </div>
    )
}

export default Article
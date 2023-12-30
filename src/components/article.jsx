import '../css/article.css'

function Article({title , content , children}){
    return (
        <div className="article">
            <div className="article_title">{title}</div>
            <div className="article_content">{
                content && content.map(cont => <p>{cont}</p>)
            }</div>
            {children}
        </div>
    )
}

export default Article
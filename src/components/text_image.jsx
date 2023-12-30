import '../css/text_image.css'

function TextImage({reverse ,title, text ,image ,background, children,upspace}){
    return (
<div className="text_image" style={{flexDirection:reverse?'column-reverse':'column',background:background?'hsla(0, 0%, 100%, .6)':'transparent'}}>
    <div>
    <div className="text_title">{title}</div>
    <div className="text">{text}{children}</div>
    </div>
    
    <div className={"image"+ (upspace?' image_fix':'')}>
        {upspace && <>
        <br /><br /> <br /><br />
        </>}
        <img src={image} alt="" />
    </div>
</div>
    )
}

export default TextImage
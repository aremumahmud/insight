import '../css/video_tutorial.css'

function VideoIframe({src}){
    return (
        <div className="frame_wrapper">
           <iframe title="video_iframe" className="video_frame" src={src} width="100%" height="550px" frameborder="0" allowfullscreen="1" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
     
        </div>
        )
}

export default VideoIframe
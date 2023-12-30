import apple from '../images/appstore_logo.png'
import google from '../images/google-play-store-logo.png'
import '../css/apple_google.css'

function AppleGoogle(){
    return (
        <div className="app_download">
            <div><img src={apple} alt="" /></div>
            <div><img src={google} alt="" /></div>
        </div>
    )
}

export default AppleGoogle
import headerLogo from '../images/logo.png'
import '../css/header.css'

function Header ({isopen, setnav}){
    return  (
        <div className="header">
            <div className="header_logo">
               <img src={headerLogo} alt="" />
            </div>
            <div className="nav" onClick={()=>{setnav(nav => !nav)}}>
                <div className="menu">menu</div>
                {
                    isopen ? <div>X</div>:<div className="elipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                }
                
            </div>
        </div>
    )
}

export default Header
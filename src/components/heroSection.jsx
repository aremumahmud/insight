import '../css/herosection.css'
import SlideText from './SlidedText'

function HeroSection({theme}){
    return (
        <div className={theme?"hero_section light_hero":'hero_section'}>
            <div></div>
            <div className='grouper'>
              {/* <div className="title">
            <span>w</span>
            <span>e</span>
            <span> </span>
            <span>l</span>
            <span>e</span>
            <span>a</span>
            <span>r</span>
            <span>n</span>
            <span><br /> </span>
            <span>t</span>
            <span>o</span>
            <span> </span>
            <span>d</span>
            <span>r</span>
            <span>i</span>
            <span>v</span>
            <span>e</span>
            <span> </span>
            <span>e</span>
            <span>a</span>
            <span>s</span>
            <span>y</span>
            <span> </span>
            <span>a</span>
            <span>n</span>
            <span>d</span>
            <span> </span>
            <span>s</span>
            <span>a</span>
            <span>f</span>
            <span>e</span>
            <span> .</span>

            </div> */}
            <SlideText word={'Wir lernen, einfach und sicher zu fahren .'} style={{
                fontSize: '3rem',
                lineHeight:'3.2rem',
                fontWeight:'300',
                mixBlendMode: 'darken'
                
            }}/>
            <br />
            <div className='subtitle'>
                <span>Wir sind eine</span>
                <span>Fahragentur </span>
                <span>mit Weltklasseniveau Profis, <br /> </span>

                <span> die trainieren </span>
                <span>und <br /> Treiber entwickeln.</span>
            </div>
            <br />
            <div className="cta">
            Loslegen
            </div>  
            </div>
            
            
        </div>
            
    )
}

export default HeroSection
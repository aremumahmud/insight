import Spline from '@splinetool/react-spline';

export default function Spli3D() {
  return (
    <div style={{
        position: 'fixed',
        zIndex:'-1',
        height:'100%',
        width:'100%',
        
    }}>
       <Spline scene="https://prod.spline.design/kPkTqSHe4V0VkaCE/scene.splinecode" />
  

    </div>
     );
}


   
import ESTechBackgroundImage from './ESTechBackgroundImage.png';
import ESLogo from './ESLogo.svg';
import './App.css';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener('mousemove', parallax);
    function parallax(e) {
      console.log('aaaaa')
      document.querySelectorAll('.layer').forEach( layer => {
        const x = (window.innerWidth - e.pageX * 3) / 100
        const y = (window.innerHeight - e.pageY * 4) / 100
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      });
    }
    return () => window.removeEventListener('mousemove', parallax);
  });
  
  return (
    <div className="App">
      
       <img src={ESTechBackgroundImage} className="App-background layer" alt="" />
       <div className="innerBlock">
         <div className="leftBlock">
           <div className="leftBlock-up">We’re working  on it.</div>
           <div className="leftBlock-down">Come back soon.</div>
         </div>
         <div className="rightBlock">
           <img src={ESLogo}  style={{width: 320, height: 320}}/>
           <div >
             <div className="rightBlock-up">ESTECH</div>
             <div className="rightBlock-down">ELEMENT SOFTWARE TECHNOLOGIES</div>
           </div>
         </div>
       </div>
    </div>
  );
}

export default App;

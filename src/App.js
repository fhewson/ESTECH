import ESTechBackgroundImage from './ESTechBackgroundImage.png';
import ESLogo from './ESLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <img src={ESTechBackgroundImage} className="App-background" alt="" />
       <div className="innerBlock">
         <div className="leftBlock">
           <div className="leftBlock-up">We’re working  on it.</div>
           <div className="leftBlock-down">Come back soon.</div>
         </div>
         <div className="rightBlock">
           <img src={ESLogo} style={{width: 300, height: 300}}/>
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

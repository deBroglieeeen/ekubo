import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import RoundButton from './round-button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
           <div className="name-box" >
             <a href="#">
               <h2 className="site-name">ekubo</h2>
             </a>
           </div>
           <nav className="menu">
             <ul>
                <li><RoundButton link="#" title="サービス概要"/></li>
                <li><RoundButton link="#" title="料金プラン"/></li>
                <li><RoundButton link="#" title="お申し込み"/></li>
                <li><RoundButton link="#" title="講師登録"/></li>
              </ul>
           </nav>
        </div>

      </header>

      <div className="content">
        <div className="main-image">
          {/* <img src="../public/happy-286152.jpg" /> */}
          {/* <img src="../public/happy-286152" width="420vw" height="280vh" /> */}
          {/* <img src="../public/logo192.png" width="420vw" height="280vh" /> */}
        </div>

      </div>

      <footer>
        <div>
         Copyright © 2020. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Designed by inprog,inc.
        </div>
      </footer>
    </div>
  );
}

export default App;

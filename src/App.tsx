import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Navbar from './Navbar';
import FactorExplain from './ekubo-factor-explain';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="main-image">
          {/* <img src="../public/happy-286152.jpg" /> */}
          {/* <img src="../public/happy-286152" width="420vw" height="280vh" /> */}
          {/* <img src="../public/logo192.png" width="420vw" height="280vh" /> */}
        </div>
        <ul>
          <li><FactorExplain title="e" smallTitle="nglish" content="ekuboはオンライン英語レッスン専門スクールです"/></li>
          <li><FactorExplain title="k" smallTitle="kids" content="2020年の小学生の英会話教育義務化にともない最適なカリキュラムを作成して
          おります"/></li>
        </ul>

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

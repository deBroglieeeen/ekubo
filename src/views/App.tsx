import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import FactorExplain from './components/FactorExplain/ekubo-factor-explain';
import PriceTag from './components/PriceTag/price-tag';

const lightCourseName:string = 'light';
const standardCourseName:string = 'standard';
const premiumCourseName:string = 'premium';
const lightMonthlyPrice:number = 20000;
const standardMonthlyPrice:number = 30000;
const premiumMonthlyPrice:number = 40000;
const lightDescriptions = ['月4回','一回60分','講師固定'];
const standardDescriptions = ['月4回','一回90分','講師固定'];
const premiumDescriptions = ['月4回','一回120分','講師固定','チューター制度あり'];

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content" id="container">
        <div className="main-image">
          {/* <img src="../public/happy-286152.jpg" /> */}
          {/* <img src="../public/happy-286152" width="420vw" height="280vh" /> */}
          {/* <img src="../public/logo192.png" width="420vw" height="280vh" /> */}
        </div>
        <ul id="factor-ul">
          <li className="factor-list"><FactorExplain title="e" smallTitle="nglish" content="ekuboはオンライン英語レッスン専門スクールです"/></li>
          <li className="factor-list"><FactorExplain title="k" smallTitle="ids" content="2020年の小学生の英会話教育義務化にともない最適なカリキュラムを作成して
          おります"/></li>
        </ul>

        <div>
          <ul className="price-list">
            <PriceTag price={lightMonthlyPrice} descriptions={lightDescriptions} courseName={lightCourseName}/>
            <PriceTag price={standardMonthlyPrice} descriptions={standardDescriptions} courseName={standardCourseName}/>
            <PriceTag price={premiumMonthlyPrice} descriptions={premiumDescriptions} courseName={premiumCourseName}/>
          </ul>
        </div>
      </div>



      <footer>
        <div>
         Copyright © 2020. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Designed by inprog, inc.
        </div>
      </footer>
    </div>
  );
}

export default App;

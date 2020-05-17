import React, { useRef } from 'react';
//import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import FactorExplain from './components/FactorExplain/ekubo-factor-explain';
import PriceTag from './components/PriceTag/price-tag';

const lightCourseName:string = 'Light';
const standardCourseName:string = 'Standard';
const premiumCourseName:string = 'Premium';
const lightMonthlyPrice:string = '15,000';
const standardMonthlyPrice:string = '20,000';
const premiumMonthlyPrice:string = '30,000';
const lightCourseDetails:string = 'お手軽プラン';
const standardCourseDetails:string = '人気プラン';
const premiumCourseDetails:string = 'しっかり英語を鍛えたい方';


const lightDescriptions = ['✔️1ヶ月に 8 回 のレッスン','✔️レッスンは1回あたり30分'];
const standardDescriptions = ['✔️1ヶ月に 12 回 のレッスン','✔️レッスンは1回あたり30分','✔️講師の固定が可能'];
const premiumDescriptions = ['✔️1ヶ月に 16 回 のレッスン','✔️レッスンは1回あたり30分','✔️講師の固定が可能','✔️チューター制度あり'];

const englishExplainPassage:string[] = ["ekuboはオンライン英語レッスン専門スクールです"];
const kidsExplainPassage:string[] = ["2020の小学生の英会話教育義務化にともない最適なカリキュラムを作成しております"];
const universityExplainPassage:string[] = ["東大、京大、阪大をはじめとした英語講師陣が丁寧に指導いたします。","英語の発音の良さはもちろんのことekuboでは多様な国籍の講師が在籍しているので、様々な人の文化や考えを理解する機会になります。","また、各講師は科学の専門性も持ち合わせています。"];
const buddyExplainPassage:string[] = ["ekuboの授業では徹底したマンツーマン指導を行っています。","お子様のレベルに合わせて会話内容を変えていきます。"];
const objectExplainPassage:string[] = ["お子様の目的に合わせて柔軟に授業を行います。","シチュエーション別の英会話、新単語を増やしお子様の語彙を増やしていく授業等お客様のご要望に合わせて授業を進めていきます。"];


const App = () => {

  const factorEl = useRef<HTMLUListElement>(null);
  const priceEl = useRef<HTMLUListElement>(null);

  const handleMenuClick = (title: string) => {
    if(title === "サービス概要"){
      if(factorEl && factorEl.current){
        factorEl.current.scrollIntoView({behavior: "smooth"});
      }
    }else if(title === "料金プラン"){
      if(priceEl && priceEl.current){
        priceEl.current.scrollIntoView({behavior: "smooth"});
      }
    }
  }

  return (
    <div className="App">
      <Navbar clicked = {(title: string) => handleMenuClick(title)}/>
      <div className="content" id="container">
        <div className="main-image">
          {/* <img src="../public/happy-286152.jpg" /> */}
          {/* <img src="../public/happy-286152" width="420vw" height="280vh" /> */}
          {/* <img src="../public/logo192.png" width="420vw" height="280vh" /> */}
        </div>
        <ul id = "factor-ul" ref = {factorEl}>
          <li><FactorExplain title = "e" smallTitle = "nglish" content = {englishExplainPassage}/></li>
          <li><FactorExplain title = "k" smallTitle = "ids" content = {kidsExplainPassage}/></li>
          <li><FactorExplain title = "u" smallTitle = "niversity" content = {universityExplainPassage}/></li>
          <li><FactorExplain title = "b" smallTitle = "uddy" content = {buddyExplainPassage}/></li>
          <li><FactorExplain title = "o" smallTitle = "bject" content = {objectExplainPassage}/></li>
        </ul>

        <div className = 'price-dev'>
          <ul className = "price-list" ref = {priceEl}>
          <div className = "light"><PriceTag price = {lightMonthlyPrice} descriptions = {lightDescriptions} details = {lightCourseDetails} courseName = {lightCourseName}/></div>
          <div className = "standard"><PriceTag price = {standardMonthlyPrice} descriptions = {standardDescriptions} details = {standardCourseDetails} courseName ={standardCourseName}/></div>
          <div className = "premium"><PriceTag price = {premiumMonthlyPrice} descriptions = {premiumDescriptions} details = {premiumCourseDetails} courseName ={premiumCourseName}/></div>
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

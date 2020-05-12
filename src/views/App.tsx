import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import FactorExplain from './components/FactorExplain/ekubo-factor-explain';

const englishExplainPassage:string[] = ["ekuboはオンライン英語レッスン専門スクールです"];
const kidsExplainPassage:string[] = ["2020の小学生の英会話教育義務化にともない最適なカリキュラムを作成しております"];
const universityExplainPassage:string[] = ["東大、京大、阪大をはじめとした英語講師陣が丁寧に指導いたします。","英語の発音の良さはもちろんのことekuboでは多様な国籍の講師が在籍しているので、様々な人の文化や考えを理解する機会になります。","また、各講師は科学の専門性も持ち合わせています。"];
const buddyExplainPassage:string[] = ["ekuboの授業では徹底したマンツーマン指導を行っています。","お子様のレベルに合わせて会話内容を変えていきます。"];
const objectExplainPassage:string[] = ["お子様の目的に合わせて柔軟に授業を行います。","シチュエーション別の英会話、新単語を増やしお子様の語彙を増やしていく授業等お客様のご要望に合わせて授業を進めていきます。"];

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
          <li><FactorExplain title="e" smallTitle="nglish" content={englishExplainPassage}/></li>
          <li><FactorExplain title="k" smallTitle="kids" content={kidsExplainPassage}/></li>
          <li><FactorExplain title="u" smallTitle="niversity" content={universityExplainPassage}/></li>
          <li><FactorExplain title="b" smallTitle="uddy" content={buddyExplainPassage}/></li>
          <li><FactorExplain title="o" smallTitle="bject" content={objectExplainPassage}/></li>
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

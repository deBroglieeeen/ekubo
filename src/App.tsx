import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import RoundButton from './round-button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="menu">
          <ul>
             <li><RoundButton link="#" title="サービス概要"/></li>
             <li><RoundButton link="#" title="料金プラン"/></li>
             <li><RoundButton link="#" title="お申し込み"/></li>
             <li><RoundButton link="#" title="講師登録"/></li>
           </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;

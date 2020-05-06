import React, { Props } from 'react';
import './App.scss';
import './Navbar.scss';
import RoundButton from './round-button';

type NavbarProps = {

}

type NavbarState = {
  turningScrollpos: any,
  scrolled: boolean
}

class Navbar extends React.Component<NavbarProps, NavbarState>  {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      turningScrollpos: 30,
      scrolled: false
    };
  }

  // Adds an event listener when the component is mount.
  // スクロールを認知したらhandleScrollを実行
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // スクロールしているのか否か判断する関数
  handleScroll = () => {
    // window.pageYOffsetは垂直方向のスクロール量
    // currentScrollPosはスクロールした量
    const currentScrollPos = window.pageYOffset;
    const scrolled = this.state.turningScrollpos < currentScrollPos;
    
    this.setState({
      scrolled
    });
  };

  render() {
    return (
      <header className={`App-header navbar-fixed ${this.state.scrolled ? "navbar-hidden" : ""}`}>
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
    );
  }
}

export default Navbar;

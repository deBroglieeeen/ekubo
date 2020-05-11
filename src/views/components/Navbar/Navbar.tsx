import React, { Props } from 'react';
import '../../App.scss';
import './Navbar.scss';
import SimpleButton from '../SimpleButton/simple-button';
import MenuButton from './Menu/MenuButton';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';

type NavbarProps = {

}

type NavbarState = {
  turningScrollpos: any,
  scrolled: boolean,
  menuOpen: boolean
}


// turningScrollposはtopからスクロールした量
// scrolledはスクロールされたどうかの判定boolean
// menuOpenはレスポンシブメニューの開閉boolean
class Navbar extends React.Component<NavbarProps, NavbarState>  {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      turningScrollpos: 30,
      scrolled: false,
      menuOpen: false
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

  // ハンバーガーボタン(MenuButtonコンポーネント)クリック時のメニュー開閉
  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const styles: any = {
      container:{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '10',
        opacity: 1,
        display:'flex',
        alignItems:'center',
        width: '100%',
    }}

    return (
      <header className={`App-header navbar-fixed ${this.state.scrolled ? "navbar-hidden" : null}`}>
        <div className="container">
           <div className="name-box" >
             <a href="#">
               <h2 className="site-name">ekubo</h2>
             </a>
           </div>

           <div className="ResponsiveMenu">
             <div style={styles.container}>
               <MenuButton open={this.state.menuOpen} onClick={() =>this.handleMenuClick()} color='white'/>
               <Menu open={this.state.menuOpen} />
             </div>
            </div>

           <nav className="menu">
             <ul>
                <li><SimpleButton link="#" title="サービス概要"/></li>
                <li><SimpleButton link="#" title="料金プラン"/></li>
                <li><SimpleButton link="#" title="お申し込み"/></li>
                <li><SimpleButton link="#" title="講師登録"/></li>
              </ul>
           </nav>

        </div>
      </header>
    );
  }
}

export default Navbar;

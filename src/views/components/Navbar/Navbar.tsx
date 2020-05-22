import React, {useEffect, useRef, useState} from 'react';
import '../../App.scss';
import './Navbar.scss';
import SimpleButton from '../SimpleButton/simple-button';
import MenuButton from './Menu/MenuButton';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';

type NavbarProps = {
  clicked: any,
  // setRef: () => void;
}

// turningScrollposはtopからスクロールした量
// scrolledはスクロールされたどうかの判定boolean
// menuOpenはレスポンシブメニューの開閉boolean
const Navbar: React.FC<NavbarProps> = props => {
  const [turningScrollpos,setTurningScrollpos] = useState(30);
  const [scrolled,setScrolled] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);

  // Adds an event listener when the component is mount.
  // スクロールを認知したらhandleScrollを実行
  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  });

  // スクロールしているのか否か判断する関数
  const handleScroll = () => {
    // window.pageYOffsetは垂直方向のスクロール量
    // currentScrollPosはスクロールした量
    const currentScrollPos = window.pageYOffset;
    const scrolled = turningScrollpos < currentScrollPos;

    setScrolled(scrolled)
  };

  // ハンバーガーボタン(MenuButtonコンポーネント)クリック時のメニュー開閉
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const styles: any = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: '100',
      opacity: 1,
      display:'flex',
      alignItems:'center',
      width: '100%',
  } }

  return (
    <header className={`App-header navbar-fixed ${scrolled ? "navbar-hidden" : null}`}>
      <div className="container">
         <div className="name-box" >
           <a href="/">
             <h2 className="site-name">ekubo</h2>
           </a>
         </div>

         <div className="ResponsiveMenu">
           <div style={styles.container}>
             <MenuButton open={menuOpen} onClick={() => handleMenuClick()} color='white'/>
             <Menu onClick = {props.clicked} open={menuOpen} />
           </div>
          </div>

         <nav className="menu">
           <ul>
              <li><SimpleButton onClick = {() => props.clicked("サービス概要")} title = "サービス概要"/></li>
              <li><SimpleButton onClick = {() => props.clicked("料金プラン")} title = "料金プラン"/></li>
              <li><SimpleButton onClick = {() => props.clicked("お申し込み")} title = "お申し込み"/></li>
              {/* <li><SimpleButton link="#" title="講師登録"/></li> */}
            </ul>
         </nav>

      </div>
    </header>
  );

}

export default Navbar;

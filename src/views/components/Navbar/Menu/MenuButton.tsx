import React, { useState, useEffect } from 'react';
import './MenuAnimation.scss';
//import './MenuButton.scss';

type MenuButtonProps = {
  open: boolean,
  color: any,
  onClick: any
}

type MenuButtonState = {
  open: boolean,
  color: any
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {

  const [open, setOpen] = useState(props.open);
  const [color, setColor] = useState(props.color);
  useEffect(() => {
    if(props.open !== open){
      setOpen(props.open)
    }
  });

  // openをtrueならfalseに，falseならtrueにする
  const handleClick = () => {
    setOpen(!open);
  }

  // const styles = {
  //   lineTop: {
  //     transform: open ? 'rotate(45deg)':'none',
  //   },
  //   lineMiddle: {
  //     opacity: open ? 0: 1,
  //     transform: open ? 'translateX(-16px)':'none',
  //   },
  //   lineBottom: {
  //     transform: open ? 'translateX(-1px) rotate(-45deg)':'none',
  //   }
  // }

  const styles: any = {
    container: {
      height: '32px',
      width: '32px',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '3vh 2vw 0 auto',
      cursor: 'pointer',
      padding: '4px',
      zIndex: 3,
    },
    line: {
      height: '2px',
      width: '20px',
      background: '#fb9e93',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: open ? 'rotate(45deg)':'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: open ? 0: 1,
      transform: open ? 'translateX(-16px)':'none',
    },
    lineBottom: {
      transform: open ? 'translateX(-1px) rotate(-45deg)':'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },
  }

  return (
    <div style = {styles.container}
      className = 'menu-button-container'
      /* onClickはNavbarのmenuOpen開閉 */
      onClick = {props.onClick ? props.onClick:
        () => {handleClick();}} >

      <div className = "line line-top" style = {{...styles.line, ...styles.lineTop}} />
      <div className = "line line-middle" style = {{...styles.line, ...styles.lineMiddle}}/>
      <div className = "line line-bottom" style = {{...styles.line, ...styles.lineBottom}}/>
    </div>
  );
}

export default MenuButton;
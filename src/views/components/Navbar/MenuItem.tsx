import React, { Props } from 'react';
import './MenuAnimation.scss';


type MenuItemProps = {
  title: string,
  link: string,
  onClick: any,
  key: number,
  delay: string
}

// MenuItem選択時 open or not でstate使う?
type MenuItemState = {

}

class MenuItem extends React.Component<MenuItemProps, MenuItemState>  {
  constructor(props: MenuItemProps) {
    super(props);
    this.state = {

    };
  }

  render() {
    const styles={
      container: {
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay:this.props.delay,
      },
      menuItem:{
        fontFamily:'Tahoma',
        fontSize: '1.2rem',
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color:  '#4f323b',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay:this.props.delay,
      },
      line: {
        width: '90%',
        height: '1px',
        background: 'gray',
        margin: '0 auto',
        animation: '0.5s shrink forwards',
        animationDelay:this.props.delay,
      }
    }
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onClick={this.props.onClick}>
          {this.props.title}
        </div>
      <div style={styles.line}/>
    </div>
    );
  }

}

export default MenuItem;

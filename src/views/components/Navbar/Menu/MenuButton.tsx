import React, { Props } from 'react';
import './MenuAnimation.scss';

type MenuButtonProps = {
  open: boolean,
  color: any,
  onClick: any
}

type MenuButtonState = {
  open: boolean,
  color: any
}

class MenuButton extends React.Component<MenuButtonProps, MenuButtonState>  {
  constructor(props: MenuButtonProps) {
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    };
  }

  componentWillReceiveProps = (nextProps: any) => {
    if(nextProps.open !== this.state.open){
      this.setState({ open:nextProps.open });
    }
  }

  // openをtrueならfalseに，falseならtrueにする
  handleClick = () =>{
  this.setState({ open:!this.state.open });
  }

  render() {
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
        transform: this.state.open ? 'rotate(45deg)':'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0: 1,
        transform: this.state.open ? 'translateX(-16px)':'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      },
    }
    return (
      <div className = 'menu-button-container' style = {styles.container}
        /* onClickはNavbarのmenuOpen開閉 */
        onClick = {this.props.onClick ? this.props.onClick:
          () => {this.handleClick();}}>

        <div className = 'line' style = {{...styles.line,...styles.lineTop}}/>
        <div className = 'line-top' style = {{...styles.line,...styles.lineMiddle}}/>
        <div className = 'line-middle' style = {{...styles.line,...styles.lineBottom}}/>
      </div>
    );
  }

}


export default MenuButton;

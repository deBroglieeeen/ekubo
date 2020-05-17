import React, { Props } from 'react';
import './MenuAnimation.scss';
import MenuItem from './MenuItem';

type MenuProps = {
  open: boolean,
}

type MenuState = {
  open: boolean
}

class Menu extends React.Component<MenuProps, MenuState>  {
  constructor(props: MenuProps) {
    super(props);
    // propsのopenとstateのopenは等しくなるようstate.open用意
    this.state = {
      open: this.props.open ? this.props.open : false,
    }

  }

  componentWillReceiveProps(nextProps: MenuProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }


  // ハンバーガーボタン押して開くメニュー内のMenuItem押すとメニュー閉じる
  handleLinkClick = (title: string) => {
    this.setState({ open: false });
    if(title === "お申し込み"){
      window.location.href = "https://lin.ee/1ujY7ZVsL";
    }
  }

  render() {
    const styles: any = {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: this.state.open? '50vh': 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        opacity: 0.95,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
      },
      menuList: {
        paddingTop: '3rem',
      }
    };
    return (
      <div style = {styles.container}>
        {
          this.state.open ?
            <div style = {styles.menuList}>

                  <MenuItem
                    key={1}
                    delay='0.1s'
                    onClick={() => {this.handleLinkClick("サービス概要");}}
                    title="サービス概要" />

                  <MenuItem
                    key={2}
                    delay='0.2s'
                    onClick={() => {this.handleLinkClick("料金プラン");}}
                    title="料金プラン" />

                  <MenuItem
                    key={3}
                    delay='0.3s'
                    onClick={() => {this.handleLinkClick("お申し込み");}}
                    title="お申し込み" />

                  <MenuItem
                    key={4}
                    delay='0.4s'
                    onClick={() => {this.handleLinkClick("講師登録");}}
                    title="講師登録" />

            </div> : null
        }
      </div>
    );
  }

}

export default Menu;

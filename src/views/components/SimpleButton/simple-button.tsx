import React, { Props } from 'react';
import './simple-button.scss';

// Introのpropsのtype alias を定義
type SimpleButtonProps = {
  title: string;
  onClick: any;
}
type SimpleButtonState = {
  buttonOpen: boolean
}

// const scrollToRef = (ref) => window.scrollTo

const handleClick = (title: string) => {
  if(title === "お申し込み"){
    window.location.href = "https://lin.ee/1ujY7ZVsL";
  }
}

// React.FC型を用いる
// ジェネリクスにIntroPropsを指定
//const SimpleButton = (text:　string) => {
class SimpleButton extends React.Component<SimpleButtonProps, SimpleButtonState>  {
  constructor(props: SimpleButtonProps) {
    super(props);
    this.state = {
      buttonOpen: false
    };
  }

  render() {
    return (
      <div>
        <a className="btn-top" onClick={ () => { handleClick(this.props.title); this.props.onClick(this.props.title); } }>{this.props.title}</a>
      </div>
    );
  }
}

export default SimpleButton;

import React, { Props } from 'react';
import './simple-button.scss';

// Introのpropsのtype alias を定義
type SimpleButtonProps = {
  title: string;
  link: string;
}
type SimpleButtonState = {
  buttonOpen: boolean
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
        <a className="btn-top" href={this.props.link}>{this.props.title}</a>
      </div>
    );
  }
}

export default SimpleButton;

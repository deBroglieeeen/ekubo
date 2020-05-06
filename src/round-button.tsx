import React, { Props } from 'react';
import './round-button.scss';

// Introのpropsのtype alias を定義
type RoundButtonProps = {
  title: string;
  link: string;
}
type RoundButtonState = {
  buttonOpen: boolean
}

// React.FC型を用いる
// ジェネリクスにIntroPropsを指定
//const RoundButton = (text:　string) => {
class RoundButton extends React.Component<RoundButtonProps, RoundButtonState>  {
  constructor(props: RoundButtonProps) {
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

export default RoundButton;

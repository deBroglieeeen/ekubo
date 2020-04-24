import React, { Props } from 'react';
import './round-button.scss'

// Introのpropsのtype alias を定義
type RoundButtonProps = {
  title: string;
  link: string;
}

// React.FC型を用いる
// ジェネリクスにIntroPropsを指定
//const RoundButton = (text:　string) => {
const RoundButton: React.FC<RoundButtonProps> = props => {
  return (
    <div>
      <a className="btn-top-radius" href={props.link}>{props.title}</a>
    </div>
  );
}

export default RoundButton;
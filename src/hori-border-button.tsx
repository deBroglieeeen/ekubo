import React, { Props } from 'react';
import './hori-border-button.scss'

// Introのpropsのtype alias を定義
type HoriBorderButtonProps = {
  title: string;
  link: string;
}

// React.FC型を用いる
// ジェネリクスにIntroPropsを指定
//const RoundButton = (text:　string) => {
const HoriBorderButton: React.FC<HoriBorderButtonProps> = props => {
  return (
    <div>
      <a className="btn-hori-border" href={props.link}>{props.title}</a>
    </div>
  );
}

export default HoriBorderButton;
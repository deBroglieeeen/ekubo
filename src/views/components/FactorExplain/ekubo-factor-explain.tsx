import React, { Props } from 'react';
import './ekubo-factor-explain.scss'

// Introのpropsのtype alias を定義
type FactorExplainProps = {
  title: string;
  smallTitle:string;
  content: string[];
}

const FactorExplain: React.FC<FactorExplainProps> = props => {
  const contentDoms = props.content.map((passage,index) =>
    <p key={index}>{passage}</p>
  );
  return (
    <div className="factor-explain-container">
      <div className="factor-title">
        <h2>{props.title}</h2><h3>{props.smallTitle}</h3>
      </div>
      <div className="factor-content">
        {/* <h2>{props.content}</h2> */}
        {contentDoms}
      </div>
    </div>
  );
}

export default FactorExplain;
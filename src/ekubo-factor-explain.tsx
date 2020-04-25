import React, { Props } from 'react';
import './round-button.scss'

// Introのpropsのtype alias を定義
type FactorExplainProps = {
  title: string;
  smallTitle:string;
  content: string;
}

const FactorExplain: React.FC<FactorExplainProps> = props => {
  return (
    <div className="factor-explain-container">
      <div className="factor-title">
        <h2>props.title</h2><h3>props.smallTitle</h3>
      </div>
      <div className="factor-content">
        <h4> props.content</h4>
      </div>
    </div>
  );
}

export default FactorExplain;
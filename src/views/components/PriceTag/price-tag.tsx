import React, { Props } from 'react';
import './price-tag.scss';

type PriceTagProps = {
  courseName: string;
  price: number;
  descriptions: string[];
}

const PriceTag: React.FC<PriceTagProps> = props => {
  const descriptionDoms = props.descriptions.map((description,index) =>
    <li key={index}>{description}</li>
    );
  return(
    <div className="price-tag-border">
      <h1>
        {props.courseName}
      </h1>
      <h2>
        {props.price}¥/月
      </h2>
      <ul><li>{descriptionDoms}</li></ul>
    </div>
  );
}

export default PriceTag;
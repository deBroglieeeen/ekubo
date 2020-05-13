import React, { Props } from 'react';
import './price-tag.scss';

type PriceTagProps = {
  courseName: string;
  price: string;
  details: string;
  descriptions: string[];
}

const PriceTag: React.FC<PriceTagProps> = props => {
  const descriptionDoms = props.descriptions.map((description,index) =>
    <li key={index}>{description}</li>
    );
  return(
    <div className='wrapper-price'>
      <div className='package-price'>
        <div className='name-price'>{props.courseName}</div>
        <div className='price'>￥{props.price}</div>
        <div className='details'>{props.details}</div>
        <hr />

        <ul className="price-ul"><li className="price-li">{descriptionDoms}</li></ul>
      </div>
    </div>
  );
}

export default PriceTag;

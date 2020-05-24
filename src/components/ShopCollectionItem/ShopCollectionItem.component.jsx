import React from 'react';
import './ShopCollectionItem.module.styles.scss';
import CustomButton from '../forms/CustomButton/CustomButton.component';
export default function ShopCollectionItem({ name, price, imageUrl }) {
  return (
    <div className='shop-collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton classes='inverted'> Add to Cart</CustomButton>
    </div>
  );
}

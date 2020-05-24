import React from 'react';
import './ShopCollectionItem.module.styles.scss';
import CustomButton from '../forms/CustomButton/CustomButton.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
const ShopCollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
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
      <CustomButton classes='inverted' onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopCollectionItem);

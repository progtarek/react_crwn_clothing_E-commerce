import React from 'react';
import { connect } from 'react-redux';

import {
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem,
  deleteItem,
  decreaseItemQuantity,
  increaseItemQuantity,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItemQuantity(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => increaseItemQuantity(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
  increaseItemQuantity: (item) => dispatch(increaseItemQuantity(item)),
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

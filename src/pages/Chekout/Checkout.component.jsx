import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';

import cartItemSelector, {
  cartItemPriceSelector,
} from '../../redux/cart/cart.selector';

import './Checkout.module.styles.scss';

const Checkout = ({ cartItems, totalPrice }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${totalPrice}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemSelector,
  totalPrice: cartItemPriceSelector,
});

export default connect(mapStateToProps)(Checkout);

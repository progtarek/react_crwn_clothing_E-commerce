import React from 'react';
import './CartDropDown.styles.scss';
import CustomButton from '../forms/CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.component';
import { connect } from 'react-redux';
import cartItemSelector from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartDropDown = ({ items }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton type='button'>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: cartItemSelector,
});

export default connect(mapStateToProps)(CartDropDown);

import React from 'react';
import './CartDropDown.styles.scss';
import CustomButton from '../forms/CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.component';
import { connect } from 'react-redux';
import cartItemSelector from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import toggleCartVisibility from '../../redux/cart/cart.action';

const CartDropDown = ({ items, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton
        type='button'
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartVisibility());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: cartItemSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

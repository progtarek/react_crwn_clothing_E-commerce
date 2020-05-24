import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/imgs/cart.svg';
import './Cart.module.styles.scss';
import { connect } from 'react-redux';
import toggleCartVisibility from '../../redux/cart/cart.action';

const Cart = ({ toggleCartVisibility }) => {
  return (
    <div className='cart-icon' onClick={toggleCartVisibility}>
      <ShoppingCartIcon className='shopping-icon' />
      <span className='items-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(null, mapDispatchToProps)(Cart);

import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/imgs/cart.svg';
import './Cart.module.styles.scss';
import { connect } from 'react-redux';
import toggleCartVisibility from '../../redux/cart/cart.action';
import { cartItemCountSelector } from '../../redux/cart/cart.selector';

const Cart = ({ toggleCartVisibility, itemsCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartVisibility}>
      <ShoppingCartIcon className='shopping-icon' />
      <span className='items-count'> {itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

const mapStateToProps = (state) => ({
  itemsCount: cartItemCountSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

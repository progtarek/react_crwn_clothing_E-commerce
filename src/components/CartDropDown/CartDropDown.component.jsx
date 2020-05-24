import React from 'react';
import './CartDropDown.styles.scss';
import CustomButton from '../forms/CustomButton/CustomButton.component';
export default function CartDropDown() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>cart items</div>
      <CustomButton type='button'>Go to checkout</CustomButton>
    </div>
  );
}

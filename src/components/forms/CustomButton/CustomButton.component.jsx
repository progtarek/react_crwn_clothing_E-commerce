import React from 'react';
import './CustomButton.module.styles.scss';
export default function CustomButton({ children, ...rest }) {
  return (
    <button className='custom-button' {...rest}>
      {children}
    </button>
  );
}

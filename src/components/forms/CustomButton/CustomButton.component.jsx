import React from 'react';
import './CustomButton.module.styles.scss';
export default function CustomButton({ children, customClass, ...rest }) {
  return (
    <button className={`${customClass} custom-button`} {...rest}>
      {children}
    </button>
  );
}

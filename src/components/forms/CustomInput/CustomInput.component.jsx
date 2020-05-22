import React from 'react';
import './CustomInput.module.styles.scss';
export default function CustomInput({ changeHandler, label, ...rest }) {
  return (
    <div className='group'>
      <input className='form-input' onChange={changeHandler} {...rest} />
      {label ? (
        <label
          className={`${rest.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

import React from 'react';
import './Auth.module.styles.scss';
import Login from '../../components/Login/Login.component';
import Register from '../../components/Register/Register.component';

export default function Auth() {
  return (
    <div className='auth'>
      <Login />
      <Register />
    </div>
  );
}

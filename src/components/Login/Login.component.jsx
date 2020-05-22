import React, { useState } from 'react';
import './Login.module.styles.scss';
import CustomInput from '../forms/CustomInput/CustomInput.component';
import CustomButton from '../forms/CustomButton/CustomButton.component';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <form className='login' onSubmit={onSubmit}>
      <CustomInput
        type='text'
        name='email'
        label='Email'
        value={credentials.email}
        onChange={changeHandler}
      />
      <CustomInput
        type='password'
        name='password'
        label='Password'
        value={credentials.password}
        onChange={changeHandler}
      />
      <CustomButton>Login</CustomButton>
    </form>
  );
}

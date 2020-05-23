import React, { useState } from 'react';
import './Login.module.styles.scss';
import CustomInput from '../forms/CustomInput/CustomInput.component';
import CustomButton from '../forms/CustomButton/CustomButton.component';
import { signInWithGoogle, auth } from '../../utils/firebase';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const { email, password } = credentials;
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      setCredentials({
        email: '',
        password: '',
      });
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='login' onSubmit={onSubmit}>
      <h2 className='heading'>I already have an account</h2>
      <span>Sign in with your email and password</span>
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
      <div className='controls'>
        <CustomButton>Login</CustomButton>
        <CustomButton customClass='google' onClick={signInWithGoogle}>
          Sign in With Google
        </CustomButton>
      </div>
    </form>
  );
}

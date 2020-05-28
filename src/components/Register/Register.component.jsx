import React, { useState } from 'react';
import './Register.module.styles.scss';
import CustomInput from '../forms/CustomInput/CustomInput.component';
import CustomButton from '../forms/CustomButton/CustomButton.component';
import { auth, createUserProfileDocument } from '../../utils/firebase';

export default function Register() {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      console.warn('passwords do not match');
      return;
    }

    try {
      const { email, password, displayName } = credentials;
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, displayName);
      setCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='register'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <CustomInput
          type='text'
          value={credentials.displayName}
          label='Display Name'
          name='displayName'
          onChange={changeHandler}
        />
        <CustomInput
          type='email'
          value={credentials.email}
          label='Email'
          name='email'
          onChange={changeHandler}
        />
        <CustomInput
          type='password'
          value={credentials.password}
          label='Password'
          name='password'
          onChange={changeHandler}
        />
        <CustomInput
          type='password'
          value={credentials.confirmPassword}
          label='Confirm Password'
          name='confirmPassword'
          onChange={changeHandler}
        />

        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
}

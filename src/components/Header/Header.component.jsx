import React from 'react';
import './Header.module.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/imgs/crown.svg';
export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
      <nav className='nav'>
        <Link to='shop' className='nav-item'>
          Shop
        </Link>
        <Link to='shop' className='nav-item'>
          Contact
        </Link>
        <Link to='auth' className='nav-item'>
          Login
        </Link>
      </nav>
    </div>
  );
}

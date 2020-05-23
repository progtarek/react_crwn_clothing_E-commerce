import React from 'react';
import './Header.module.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/imgs/crown.svg';
import { auth } from '../../utils/firebase';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className='nav-item' onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to='auth' className='nav-item'>
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);

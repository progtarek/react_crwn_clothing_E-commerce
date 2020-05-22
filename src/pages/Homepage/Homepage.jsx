import React from 'react';
import Directory from '../../components/Directory/Directory.component';
import './Homepage.module.styles.scss';

const Homepage = (props) => {
  console.log('React-router-dom ===>', props);
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default Homepage;

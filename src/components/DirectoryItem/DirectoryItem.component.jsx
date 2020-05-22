import React from 'react';
import './DirectoryItem.module.styles.scss';
import { withRouter } from 'react-router-dom';
const DirectoryItem = ({ title, imageUrl, linkUrl, size, match, history }) => {
  return (
    <div
      className={`${size} directory-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(DirectoryItem);

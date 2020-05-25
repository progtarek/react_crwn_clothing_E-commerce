import React from 'react';
import DirectoryItem from '../DirectoryItem/DirectoryItem.component';
import './Directory.module.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import itemsSelector from '../../redux/directory/directory.selector';
const Directory = ({items}) => {
  return (
    <div className='directory'>
      {items.map(({ id, ...rest }) => (
        <DirectoryItem key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: itemsSelector,
});

export default connect(mapStateToProps)(Directory);

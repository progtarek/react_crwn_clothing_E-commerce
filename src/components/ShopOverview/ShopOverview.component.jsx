import React from 'react';
import ShopCollection from '../../components/ShopCollection/ShopCollection.component';
import { createStructuredSelector } from 'reselect';
import collectionSelector from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const ShopOverView = ({ collections }) => {
  return (
    <div className='shop-overview'>
      {collections.map(({ id, ...rest }) => (
        <ShopCollection key={id} {...rest} limit='4' />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionSelector,
});

export default connect(mapStateToProps)(ShopOverView);

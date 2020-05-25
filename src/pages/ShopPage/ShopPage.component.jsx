import React from 'react';
import ShopCollection from '../../components/ShopCollection/ShopCollection.component';
import { createStructuredSelector } from 'reselect';
import collectionSelector from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...rest }) => (
        <ShopCollection key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionSelector,
});

export default connect(mapStateToProps)(ShopPage);

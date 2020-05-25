import React from 'react';
import './CollectionPage.module.styles.scss';
import { connect } from 'react-redux';
import { specificCollectionSelector } from '../../redux/shop/shop.selector';
import ShopCollection from '../../components/ShopCollection/ShopCollection.component';

const CollectionPage = ({ collection }) => {
  return (
    <div className='collection-page'>
      <ShopCollection {...collection} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: specificCollectionSelector(ownProps.match.params.collectionId)(
      state
    ),
  };
};

export default connect(mapStateToProps)(CollectionPage);

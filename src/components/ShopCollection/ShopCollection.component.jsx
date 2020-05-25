import React from 'react';
import ShopCollectionItem from '../ShopCollectionItem/ShopCollectionItem.component';
import './ShopCollection.module.styles.scss';

const ShopCollection = ({ title, items, limit }) => {
  return (
    <div className='shop-collection'>
      <h1 className='title'>{title}</h1>
      <div className='row'>
        {limit
          ? items
              .filter((item, index) => index < 4)
              .map((item) => <ShopCollectionItem key={item.id} item={item} />)
          : items.map((item) => (
              <ShopCollectionItem key={item.id} item={item} />
            ))}
      </div>
    </div>
  );
};

export default ShopCollection;

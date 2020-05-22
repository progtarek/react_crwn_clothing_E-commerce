import React, { useState } from 'react';
import ShopData from './ShopData';
import ShopCollection from '../../components/ShopCollection/ShopCollection.component';
const ShopPage = (props) => {
  const [collections] = useState(ShopData);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...rest }) => (
        <ShopCollection key={id} {...rest} />
      ))}
    </div>
  );
};

export default ShopPage;

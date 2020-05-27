import React, { useEffect } from 'react';
import ShopCollection from '../../components/ShopCollection/ShopCollection.component';
import { createStructuredSelector } from 'reselect';
import collectionSelector from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { firestore } from '../../utils/firebase';
import updateShopStore from '../../redux/shop/shop.action';

const ShopOverView = ({ collections, updateCollections }) => {
  useEffect(() => {
    if (!Object.keys(collections).length) {
      (() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async (snapshot) => {
          const transformedCollections = snapshot.docs.map((doc) => {
            const { title, items } = doc.data();
            return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items,
            };
          });

          const transformedCollectionsMap = transformedCollections.reduce(
            (accumulator, doc) => {
              accumulator[doc.title.toLowerCase()] = doc;
              return accumulator;
            },
            {}
          );
          updateCollections(transformedCollectionsMap);
        });
      })();
    }
  });
  return (
    <div className='shop-overview'>
      {Object.keys(collections).map((key) => {
        const { id, ...rest } = collections[key];
        return <ShopCollection key={id} {...rest} limit='4' />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionSelector,
});

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateShopStore(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopOverView);

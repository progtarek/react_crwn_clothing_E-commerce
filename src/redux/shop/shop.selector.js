import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  mens: 5,
};

const shopSelector = (state) => state.shop;

const collectionSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const specificCollectionSelector = (collectionId) =>
  createSelector([collectionSelector], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionId]
    )
  );

export default collectionSelector;

import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

const collectionSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const specificCollectionSelector = (collectionId) =>
  createSelector(
    [collectionSelector],
    (collections) => collections[collectionId]
  );

export default collectionSelector;

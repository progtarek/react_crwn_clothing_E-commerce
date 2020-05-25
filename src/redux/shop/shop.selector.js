import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

const collectionSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export default collectionSelector;

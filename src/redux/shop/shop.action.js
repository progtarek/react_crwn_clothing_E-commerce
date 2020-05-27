import SHOP_TYPES from './shop.types';

const updateShopStore = (collectionMap) => ({
  type: SHOP_TYPES.UPDATE_SHOP_STORE,
  payload: collectionMap,
});

export default updateShopStore;

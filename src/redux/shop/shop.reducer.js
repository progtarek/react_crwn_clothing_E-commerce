// TODO remove shop data.
// import shopData from '../../pages/ShopPage/ShopData';
import SHOP_TYPES from './shop.types';

const INITIAL_STATE = {
  collections: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_TYPES.UPDATE_SHOP_STORE:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

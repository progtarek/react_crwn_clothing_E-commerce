import CART_TYPES from './cart.types.js';
import addItemToCart from './cart.utils';

const INITIAL_STATE = {
  visibility: false,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        visibility: !state.visibility,
      };
    case CART_TYPES.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;

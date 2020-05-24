import CART_TYPES from './cart.types.js';

const INITIAL_STATE = {
  visibility: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        visibility: !state.visibility,
      };

    default:
      return state;
  }
};

export default cartReducer;

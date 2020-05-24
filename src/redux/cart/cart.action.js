import CART_TYPES from './cart.types';

const toggleCartVisibility = () => ({
  type: CART_TYPES.TOGGLE_CART_VISIBILITY,
});

export const addItem = (item) => ({
  type: CART_TYPES.ADD_ITEM,
  payload: item,
});

export default toggleCartVisibility;

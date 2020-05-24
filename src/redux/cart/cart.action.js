import CART_TYPES from './cart.types';

const toggleCartVisibility = () => ({
  type: CART_TYPES.TOGGLE_CART_VISIBILITY,
});

export const addItem = (item) => ({
  type: CART_TYPES.ADD_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: CART_TYPES.DELETE_ITEM,
  payload: item,
});

export const increaseItemQuantity = (item) => ({
  type: CART_TYPES.INCREASE_ITEM_QUANTITY,
  payload: item,
});

export const decreaseItemQuantity = (item) => ({
  type: CART_TYPES.DECREASE_ITEM_QUANTITY,
  payload: item,
});

export default toggleCartVisibility;

import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

const cartItemSelector = createSelector([cartSelector], (cart) => cart.items);

export const cartItemCountSelector = createSelector(
  [cartItemSelector],
  (items) =>
    items.reduce(
      (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
      0
    )
);

export const cartItemPriceSelector = createSelector(
  [cartItemSelector],
  (items) =>
    items.reduce(
      (accumulatedQuantity, item) =>
        accumulatedQuantity + item.price * item.quantity,
      0
    )
);

export const cartVisibilitySelector = createSelector(
  [cartSelector],
  (cart) => cart.visibility
);

export default cartItemSelector;

const addItemToCart = (cartItems, itemToAdd) => {
  const exist = cartItems.find((item) => item.id === itemToAdd.id);

  if (exist) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const increaseItemQuantity = (cartItems, itemToIncrease) => {
  const exist = cartItems.find((item) => item.id === itemToIncrease.id);

  if (!exist) return Error('Item does not exist.');

  return cartItems.map((item) => {
    return item.id === itemToIncrease.id
      ? {
          ...itemToIncrease,
          quantity: itemToIncrease.quantity + 1,
        }
      : item;
  });
};

export const decreaseItemQuantity = (cartItems, itemTodDecrease) => {
  const exist = cartItems.find((item) => item.id === itemTodDecrease.id);

  if (!exist) return Error('Item does not exist.');

  if (itemTodDecrease.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemTodDecrease.id);
  } else {
    return cartItems.map((item) => {
      return item.id === itemTodDecrease.id
        ? {
            ...itemTodDecrease,
            quantity: itemTodDecrease.quantity - 1,
          }
        : item;
    });
  }
};

export default addItemToCart;

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

export default addItemToCart;

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
}
export function decrementFromCart(id) {
  return {
    type: 'DECREMENT_FROM_CART',
    id,
  };
}

export function incrementFromCart(id) {
  return {
    type: 'INCREMENT_FROM_CART',
    id,
  };
}

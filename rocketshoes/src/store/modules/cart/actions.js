export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSucess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}
export function decrementFromCartRequest(id) {
  return {
    type: '@cart/DECREMENT_FROM_CART',
    id,
  };
}

export function incrementFromCart(id) {
  return {
    type: '@cart/INCREMENT_FROM_CART',
    id,
  };
}

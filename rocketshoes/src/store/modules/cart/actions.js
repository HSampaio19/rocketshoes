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
export function decrementFromCart(id) {
  return {
    type: '@cart/DECREMENT_FROM_CART',
    id,
  };
}

export function incrementFromCart(id, saga) {
  switch (saga) {
    case 'request':
      return {
        type: '@cart/INCREMENT_REQUEST',
        id,
      };
    case 'success':
      return {
        type: '@cart/INCREMENT_SUCCESS',
        id,
      };
    default:
      return {};
  }
}

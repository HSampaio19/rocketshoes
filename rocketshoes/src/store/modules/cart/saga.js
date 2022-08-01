import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addToCartSucess, incrementFromCart } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id),
  );

  const stockResponse = yield call(api.get, `/stock/${id}`);

  const stockAmount = stockResponse.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  if (!productExists) {
    const productsResponse = yield call(api.get, `/products/${id}`);

    const data = {
      ...productsResponse.data,
      amount: 0,
      priceFormatted: formatPrice(productsResponse.data.price),
    };

    yield put(addToCartSucess(data));
  }

  yield put(incrementFromCart(id));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

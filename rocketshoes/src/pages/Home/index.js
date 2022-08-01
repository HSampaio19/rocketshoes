import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import ProductList from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { addToCartRequest } from '../../store/modules/cart/actions';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };

    this.handleAddProducts = id => {
      const { dispatch } = this.props;

      dispatch(addToCartRequest(id));
    };
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProducts(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
export default connect(mapStateToProps)(Home);

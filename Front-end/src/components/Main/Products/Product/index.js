import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';

class Product extends React.Component {

  counter = 0;

  state = {
    productId: this.props.id,
    amount: this.counter,
  };

  componentDidUpdate() {
    const element = document.getElementById(`product__${this.state.productId}__description`);
    this.shouldProductShowUp(element);
  }

  shouldProductShowUp = (productDescription) => {

    const { searchbarValue } = this.props;
    const description = productDescription.textContent;
    const foundCount = description.search(searchbarValue);

    if (searchbarValue.trim() != 0) {
      const product = document.getElementById(`product__${this.state.productId}`);

      if (foundCount > 0 && searchbarValue.trim() != '') {
        product.classList.remove('should__not__render');
      }

      else if (foundCount === -1) {
        product.classList = 'product__list__element should__not__render';
      }
    }
  }

  addAmount = () => {
    this.counter = this.counter + 1;
    this.setState({ amount: this.counter });
  }

  removeAmount = () => {
    this.counter = (this.counter - 1);
    this.setState({ amount: this.counter });
  }

  handleClick = (event) => {

    const { addToCartList } = this.props;
    const { name, description, image, price } = this.props;
    const { amount } = this.state;

    addToCartList(name, description, image, price, amount);
    this.counter = 0;
    this.setState({ amount: this.counter });
  }

  zoomIn = () => {
    const product = document.getElementById(`product__${this.state.productId}__layout`);

    if (product.classList.contains('zoom--in') === false) {
      product.classList.add('zoom--in');
    }
    else if (product.classList.contains('zoom--in')) {
      product.classList.remove('zoom--in');
    }
  }

  render() {
    const { image, name, description, price, stocks, connected } = this.props;
    return (
      <li id={`product__${this.state.productId}`} className="product__list__element">
        <article id={`product__${this.state.productId}__layout`} className="product" onClick={this.zoomIn}>
          <img className="product__image" src={image} alt={`tea__article__${this.state.productId}`} />
          <div className="product__description">
            <h1 className="product__title">{name}</h1>
            <p id={`product__${this.state.productId}__description`} className="product__details">{description}</p>
            <span className="price">{price} € / 100g</span>
            <span className="inStock">{stocks} left</span>
          </div>
        </article>
        {connected === true ? 
          (
            <div id={`product__${this.state.productId}__amount__selector`} className="amount__selector">
              <button className="minus__button" type="button" onClick={this.removeAmount}><i className="fa fa-minus" /></button>
              <span>{this.state.amount}</span>
              <button className="plus__button" type="button" onClick={this.addAmount}><i className="fa fa-plus" /></button>
            </div>
          ) : null }
        {connected === true ? <button id={`product__${this.state.productId}__add__cart`} className="add__cart__button" type="button" onClick={this.handleClick}>Add to Cart</button> : null }
      </li>
    );
  }
}

export default Product;

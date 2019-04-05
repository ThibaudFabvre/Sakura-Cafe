import React from 'react';
import PaypalButton from './PaypalButton';

const CLIENT = {
  sandbox: 'xxxXXX',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

class Cart extends React.Component {
  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);

    const {userSelection} = this.props;

    return (

      <div id="cart__info">
        <ul id="selection__list">
          {userSelection.map(product => (
            <ProductInfo name={product.name} image={product.image} />
          ))}
        </ul>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}

export default Cart;
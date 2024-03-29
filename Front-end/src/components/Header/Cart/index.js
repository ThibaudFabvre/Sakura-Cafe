/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Local import
 */
import './cart.scss';

/**
 * Code
 */

const Cart = () => (
  <>
    <button id="cart__button" className="session__info__button" type="button"><Link to="/cart"><i className="fa fa-shopping-cart" /></Link></button>
  </>
);


/**
 * Export
 */
export default Cart;

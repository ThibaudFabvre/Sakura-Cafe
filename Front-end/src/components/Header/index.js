/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';


import Username from 'src/components/Username';
import Status from 'src/components/Status';
import SignInLink from 'src/components/SignInLink';
import SignUpLink from 'src/components/SignUpLink';
import Cart from 'src/components/Cart';
import { Link } from 'react-router-dom';
import Nav from './Nav';


/**
 * Local import
 */
import './header.scss';

/**
 * Code
 */


const Header = () => (
  <header id="header">
    <div id="head">
      <div className="onoffswitch">
        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" />
        <label id="animation__selector" className="onoffswitch-label" htmlFor="myonoffswitch">
          <span className="onoffswitch-inner" />
          <span className="onoffswitch-switch" />
        </label>
        <p id="animation__text">Animation</p>
      </div> { /* End of onoffswitch */ }
      <img src="src/img/logothib2.png" id="logo" alt="sakura-logo" />
      <div id="session__info">
        <SignInLink />
        <SignUpLink />
        <button id="sign__up__button" type="button"><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></button>
      </div>
    </div>
    <Nav />
  </header>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Header;

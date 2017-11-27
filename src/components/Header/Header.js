/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'react-material-icons/icons/navigation/menu';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <FlatButton
            icon={<MenuIcon className={s.sidebarIcon} />}
            className={s.sidebarBtn}
          />
          <Link className={s.brand} to="/">
            <span className={s.brandTxt}>AggregatiX</span>
          </Link>
          <Navigation />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);

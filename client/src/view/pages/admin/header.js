import React, { Component } from 'react';
import { HeaderList, HeaderListItem, HeaderLink, HeaderRightItem, HeaderATag } from './header-sc';

class Header extends Component {

  render() {
    return (
      <div>
        <HeaderList>
          <HeaderListItem><HeaderLink to="/">Home</HeaderLink></HeaderListItem>
          <HeaderListItem><HeaderLink to="/lake">Lake</HeaderLink></HeaderListItem>
          <HeaderListItem><HeaderLink to="/admin">Admin</HeaderLink></HeaderListItem>
          <HeaderRightItem><HeaderATag href="/">Logout</HeaderATag></HeaderRightItem>
        </HeaderList>
      </div>
    )
  }
}

export default Header;

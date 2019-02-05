import React, { Component } from 'react';
import { HeaderList, HeaderListItem, HeaderLink, HeaderRightItem } from './header-sc';

class Header extends Component {

  render() {
    return (
      <div>
        <HeaderList>
          <HeaderListItem><HeaderLink href='/'>Home</HeaderLink></HeaderListItem>
          <HeaderListItem><HeaderLink href='/lake'>Lake</HeaderLink></HeaderListItem>
          <HeaderListItem><HeaderLink href='/admin'>Admin</HeaderLink></HeaderListItem>
          <HeaderRightItem><HeaderLink href='/login'>Login</HeaderLink></HeaderRightItem>
        </HeaderList>
      </div>
    )
  }
}

export default Header;

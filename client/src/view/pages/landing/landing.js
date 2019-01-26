import React, { Component } from 'react';
import { MenuInput, MenuLink, MenuList, MenuListItem } from './landing-sc';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleLogin = () => {
    if (this.state.username === "cole" && this.state.password === "password") {
      console.log("Logged on");
    }
  }

  render() {
    return(
      <div>
        <MenuList>
          <MenuInput placeholder=" Username" onChange={this.handleUsernameChange} ></MenuInput>
          <MenuInput placeholder=" Password" onChange={this.handlePasswordChange} ></MenuInput>
          <MenuListItem><MenuLink href="/lake" >Play Game</MenuLink></MenuListItem>
          <MenuListItem><MenuLink>New User</MenuLink></MenuListItem>
        </MenuList>
      </div>
    )
  }
}

export default Landing;

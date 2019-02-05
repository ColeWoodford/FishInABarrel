import React, { Component } from 'react';
import { MenuLink, MenuList, MenuListItem } from './landing-sc';
import Login from './login';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playGame: false,
      newUser: false,
    };
  }

  handlePlayGame = () => {
    this.setState({
      playGame: true,
      newUser: false
    })
  }

  handleNewUser = () => {
    this.setState({
      playGame: false,
      newUser: true
    })
  }

  handleBack = () => {
    this.setState({
      playGame: false,
      newUser: false
    })
  }

  render() {

    return(
      <div>
        {(this.state.playGame || this.state.newUser) ? 
        <MenuList>
            <Login playGame={this.state.playGame} newUser={this.state.newUser} />
            <button onClick={this.handleBack} >Back</button>
        </MenuList> :
        <MenuList>
          <MenuListItem>
            <MenuLink
            onClick={this.handlePlayGame}
            >
              LOGIN
            </MenuLink>
            <MenuLink
            onClick={this.handleNewUser}
            >
              NEW USER
            </MenuLink>
          </MenuListItem>
        </MenuList>
        }
      </div>
    )
  }
}

export default Landing;

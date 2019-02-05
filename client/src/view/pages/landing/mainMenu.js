// import React, { Component } from 'react';
// import { MenuInput, MenuLink, MenuList, MenuListItem } from './landing-sc';

// class Login extends Component {
//   handlePlayGame = () => {
//     console.log("Clicked")
//     this.setState({
//       playGame: true,
//       newUser: false
//     })
//   }

//   render() {
//     const { playGame, newUser } = this.props;
//     let mainMenu;

//     if (playGame) {
//       //render login and playgame
//       mainMenu =
//       <div>PLAY GAME</div>
//       <MenuListItem>
//         <MenuInput placeholder=" Username" onChange={this.handleUsernameChange} ></MenuInput>
//         <MenuInput type="password" placeholder=" Password" onChange={this.handlePasswordChange} ></MenuInput>
//       </MenuListItem>
//     } else if (newUser) {
//       //render login and create user
//       mainMenu =
//       <span>NEW USER</span>
//       <MenuListItem>
//         <MenuInput placeholder=" Username" onChange={this.handleUsernameChange} ></MenuInput>
//         <MenuInput type="password" placeholder=" Password" onChange={this.handlePasswordChange} ></MenuInput>
//       </MenuListItem>
//     } else {
//       //render nothing
//       mainMenu = 
//       <MenuListItem></MenuListItem>
//     }
//     return (
//       <div>
//         {mainMenu}
//       </div>
//     );
//   }
// }

// export default Login;

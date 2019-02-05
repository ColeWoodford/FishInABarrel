import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { login, createUser } from '../../../store/actions/login-actions';
import { MenuInput, MenuListItem } from './landing-sc';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedOn: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.username !== null) {
      return {loggedOn: true};
    }
    else return null;
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
    this.props.login(
    {
      username: this.state.username, 
      password: this.state.password
    });
  }

  handleNewUser = () => {
    this.props.createUser(
    {
      username: this.state.username,
      password: this.state.password,
      lakeid: "80699bd3-9fe2-421f-8f88-8d01c4fdba0c"
    });
  }

  render() {
    const { playGame, newUser } = this.props;
    let mainMenu;

    if (playGame) {
      //render login and playgame
      mainMenu =
      <MenuListItem>
        PLAY GAME
        <MenuInput placeholder=" Username" onChange={this.handleUsernameChange} ></MenuInput>
        <MenuInput type="password" placeholder=" Password" onChange={this.handlePasswordChange} ></MenuInput>
        <button onClick={this.handleLogin}>Play</button>
      </MenuListItem>
    } else if (newUser) {
      //render login and create user
      mainMenu =
      <MenuListItem>
        NEW USER
        <MenuInput placeholder=" Username" onChange={this.handleUsernameChange} ></MenuInput>
        <MenuInput type="password" placeholder=" Password" onChange={this.handlePasswordChange} ></MenuInput>
        <button onClick={this.handleNewUser}>Create</button>
      </MenuListItem>
    } else {
      //render nothing
      mainMenu = 
      <MenuListItem></MenuListItem>
    }
    return (
      <div>
        {this.state.loggedOn ?
          <Redirect to='/lake' /> :
          mainMenu
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      username: state.LoginReducer.username
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    login: login,
    createUser: createUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
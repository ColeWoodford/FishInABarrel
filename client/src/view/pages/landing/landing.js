import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MenuLink, MenuList, MenuListItem } from './landing-sc';
import { getLakes, newLake } from '../../../store/actions/lake-actions';
import Login from './login';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playGame: false,
      newUser: false,
    };
  }

  componentWillMount() {
    this.props.getLakes();
  }

  handlePlayGame = () => {
    this.setState({
      playGame: true,
      newUser: false
    })
  }

  handleNewUser = () => {
    const { lakes } = this.props;
    if (lakes.length === 0) {
      this.props.newLake("Major Tom's Ocean")
    }
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

function mapStateToProps(state) {
  return {
    lakes: state.LakesReducer.lakes
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
    getLakes: getLakes,
    newLake: newLake
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

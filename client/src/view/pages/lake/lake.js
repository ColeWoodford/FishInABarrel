import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LakeContainer, Row, Col, LoginMessage, LogoutButton, LogoutContainer } from './lakeTile-sc';
import { getLakes, catchFish } from '../../../store/actions/lake-actions';
import Chat from '../../chat';
import Tile from './lakeTile';
import Inventory from './inventory/inventory';

class Lake extends Component {
  constructor(props) {
    super(props);

    const { socket, catchFish, userId, lakes, username } = this.props;
		socket.on(`fish assigned ${username}`, (msg) => {
      catchFish({
        user: userId,
        fish: msg,
        lake: lakes[0].id
      });
			console.log(msg);
		});
  }

	componentWillMount() {
		this.props.getLakes();
  }
  
  getLakeName = () => {
		if (this.props.lakes.length) {
			return this.props.lakes[0].lake_name;
		}
	}

  render() {
    const { username } = this.props;
    let lake;
    if(username !== null) {
      lake =
      <div>
        <LogoutContainer>Logged in as {username}  <LogoutButton href="/">Logout</LogoutButton></LogoutContainer>
        <LakeContainer>
          <Row>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
            <Col>
              <Tile socket={this.props.socket} />
            </Col>
          </Row>
        </LakeContainer>
        <Inventory />
        <Chat socket={this.props.socket} />
      </div>
    } else {
      lake =
      <LoginMessage>
        <LogoutButton href="/">
          Please login
        </LogoutButton>
      </LoginMessage>
    }

    return(
      <div>
        {lake}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
      username: state.LoginReducer.username,
      userId: state.LoginReducer.userId,
      lakes: state.LakesReducer.lakes,
      caughtFish: state.LakesReducer.caughtFish,
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    getLakes: getLakes,
    catchFish: catchFish
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lake);

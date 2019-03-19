import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LakeContainer, Row, Col } from './lakeTile-sc';
import { getLakes } from '../../../store/actions/lake-actions';
import Chat from '../../chat';
import Tile from './lakeTile';
import Inventory from './inventory/inventory';

class Lake extends Component {
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
        <div>
					{this.getLakeName()}
				</div>
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
      <div>
        Please login
      </div>
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
      lakes: state.LakesReducer.lakes
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getLakes: getLakes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lake);

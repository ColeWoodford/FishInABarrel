import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LakeContainer, Row, Col } from './lakeTile-sc';
import { getLakes } from '../../../store/actions/lake-actions';
import Chat from '../../chat';
import Tile from './lakeTile';

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
              <Tile />
            </Col>
            <Col>
              <Tile />
            </Col>
            <Col>
              <Tile />
            </Col>
          </Row>
          <Row>
            <Col>
              <Tile />
            </Col>
            <Col>
              <Tile />
            </Col>
            <Col>
              <Tile />
            </Col>
          </Row>
          <Row>
            <Col>
              <Tile />
            </Col>
            <Col>
              <Tile />
            </Col>
            <Col>
              <Tile />
            </Col>
          </Row>
        </LakeContainer>
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


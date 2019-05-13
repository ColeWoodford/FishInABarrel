import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatCollapseButton, ChatWindow, ChatWrapper, ChatTextEntry, ChatSendButton, ChatMessage } from './chat-sc';
import PropTypes from 'prop-types';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      chatBoxContent: [],
      user: this.props.username,
      collapseMsg: "Collapse",
      showContent: true
    };
    const { socket } = this.props;
    socket.on('chat message', (msg) => {
      let newContent = this.state.chatBoxContent;
      newContent.push(msg);
      this.setState({
        chatBoxContent: newContent,
      })
    });
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  handleUserName = (event) => {
    this.setState({
      user: event.target.value
    });
  }

  handleChangeUser = () => {
    const { user } = this.state;
    if (user !== "") {
      this.setState({
        user: user
      })
    }
  }

  handleSubmit = (event) => {
    const { socket } = this.props;
    const { message } = this.state;
    if (message !== "") {
      event.preventDefault();
      socket.emit('client message',  (this.state.user + ": " + this.state.message));
      this.setState({
        message: ""
      });
    }
  }

  handleKeyPress = (event) => {
    const { socket } = this.props;
    const { message } = this.state;
    if (message !== "") {
      if (event.key === 'Enter') {
        event.preventDefault();
        socket.emit('client message', (this.state.user + ": " + this.state.message));
        this.setState({
          message: ""
        });
      }
    }
  }

  makeChat = () => {
    return (
      <div>
        {this.state.chatBoxContent.map(msg => <ChatMessage key={msg}> &nbsp;{msg} </ChatMessage>)}
      </div>
    )
  }

  handleCollapse = () => {
    if (this.state.showContent === true) {
			this.setState({
        showContent: false,
        collapseMsg: "Expand"
			})
		} else {
			this.setState({
        showContent: true,
        collapseMsg: "Collapse"
			})
		}
  }

	render() {
    let {collapseMsg} = this.state;
    return(
      <div>
        <ChatWrapper>
          <ChatCollapseButton onClick={this.handleCollapse}>{collapseMsg}</ChatCollapseButton>
          <div style={{display:this.state.showContent ? "block" : "none"}}>
          <ChatWindow>
            {this.makeChat()}
          </ChatWindow>
          <ChatTextEntry type="text" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
          <ChatSendButton onClick={this.handleSubmit} >Send</ChatSendButton>
          </div>
        </ChatWrapper>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
      username: state.LoginReducer.username
  };
}

Chat.propTypes = {
  socket: PropTypes.any,
  username: PropTypes.string,
}

export default connect(mapStateToProps)(Chat);
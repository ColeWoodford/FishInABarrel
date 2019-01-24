import React, { Component } from 'react';
import { ChatWindow, ChatWrapper, ChatTextEntry, ChatSendButton } from './styledComponents/chat-sc';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      chatBoxContent: [],
      user: "anon"
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
      socket.emit('client message', message);
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
        {this.state.chatBoxContent.map(msg => <div key={msg}> &nbsp;{msg} </div>)}
      </div>
    )
  }

	render() {

    return(
      <div>
        <p>Change UserName:</p>
        <input type="text" onChange={this.handleUserName} />
        <input type="submit" onClick={this.handleChangeUser} />
        <ChatWrapper>
          <ChatWindow>
            {this.makeChat()}
          </ChatWindow>
          <ChatTextEntry type="text" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
          <ChatSendButton onClick={this.handleSubmit} >Send</ChatSendButton>
        </ChatWrapper>
      </div>
    )
  }
};

export default Chat;

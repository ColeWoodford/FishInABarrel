import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      chatBoxContent: []
    };
    const { socket } = this.props;
    socket.on('chat message', (msg) => {
      let newContent = this.state.chatBoxContent;
      newContent.push(msg);
      console.log(msg);
      this.setState({
        chatBoxContent: newContent,
      })
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { socket } = this.props;
    event.preventDefault();
    socket.emit('client message', this.state.message);
  }

  makeChat = () => {
    return (
      <div>
        {this.state.chatBoxContent.map(msg => <div key={msg}> {msg} </div>)}
      </div>
    )
  }

	render() {

    return(
      <div>
        {/* <div>
          {this.state.chatBoxContent.map(msg => <div key={msg}> {msg} </div>)}
        </div> */}
        {this.makeChat()}
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="SEND" onClick={this.handleSubmit} />
      </div>
    )
  }
};

export default Chat;

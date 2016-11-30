import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: ''
    }
  }

  onUsernameChangeHandler(event) {
    console.log('username change', event.target.value);
    this.setState({username: event.target.value})
  }

  onContentChangeHandler(event) {
    console.log('content change', event.target.value);
    this.setState({content: event.target.value});
  }

  manageKeyDown(event) {
    // console.log('key down:', JSON.stringify(event.key), JSON.stringify(event.keycode));
    if (event.key === "Enter") {
      console.log('Enter key pressed, current state:', this.state.content);
      this.props.newMessage(this.state.username, this.state.content);
    }
  }

  render() {
    console.log("Rendering <ChatBar/>")
    return (
      <footer>
        <input
          id="username"
          type="text"
          placeholder="Your Name (Optional)"
          value={this.state.username}
          onChange={this.onUsernameChangeHandler.bind(this)}
        />
        <input
          id="new-message"
          type="text"
          value={this.state.content}
          onChange={this.onContentChangeHandler.bind(this)}
          onKeyDown={this.manageKeyDown.bind(this)}
          placeholder="Type a message and hit ENTER"
        />
      </footer>
    );
  }


}
export default ChatBar;

import React, { Component } from 'react';
import logo from './logo.svg';
import Title from "./components/Title";
import SendMessageForm from "./components/SendMessageForm";
import MessageList from "./components/MessageList";
import {Container, Row, Col, Button} from 'react-bootstrap';
import './App.css';
import "./style.css";
import "./components/chatbot.css";


// https://eduardotkoller.github.io/convForm/

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    // const chatManager = new Chatkit.ChatManager({
    //   instanceLocator: instanceLocator,
    //   userId: 'janedoe',
    //   tokenProvider: new Chatkit.TokenProvider({
    //     url: testToken
    //   })
    // })

    // chatManager.connect()
    //   .then(currentUser => {
    //     this.currentUser = currentUser
    //     this.currentUser.subscribeToRoom({
    //       roomId: roomId,
    //       hooks: {
    //         onNewMessage: message => {

    //           this.setState({
    //             messages: [...this.state.messages, message]
    //           })
    //         }
    //       }
    //     })
    //   })
  }

  sendMessage = (text) => {
    // this.currentUser.sendMessage({
    //   text,
    //   roomId: roomId
    // })
  }

render() {
    return (
        <div className="app vertical-align">
          <Container>
            <Row>
              <Col></Col>
              <Col xs lg="6" id="chatting-box-div">
                <Title />
                <MessageList 
                    roomId={this.state.roomId}
                    messages={this.state.messages} />
                <SendMessageForm
                    sendMessage={this.sendMessage} />
              </Col>
              <Col></Col>
            </Row>
          </Container>
          
        </div>
    );
  }
}

export default App;

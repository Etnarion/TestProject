import React, { Component } from 'react'
import { Button, Label, Input } from 'reactstrap'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      messageHello: 'Hello who?',
      messageEcho: 'Echo',
      echoContent: ''
    }
  }

  styles = {
    form: {
      width: '200px',
      display: 'flex', 
      flexFlow: 'column'
    },
    separator: {
      height: '4px',
      width: '400px',
      backgroundColor: 'white',
      margin: '30px'
    }
  }

  sendHello = () => {
    axios.get('http://localhost:8080/')
      .then(res => {
        this.setState({
          messageHello: res.data
        })
      })
  }

  sendEcho = () => {
    axios.post('http://localhost:8080/echo', { content: this.state.echoContent })
      .then(res => {
        this.setState({
          messageEcho: res.data
        })
      })
  }

  handleChange = (event) => {
    this.setState({
      echoContent: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={this.styles.form}>
            <Label>{this.state.messageHello}</Label>
            <Button onClick={() => this.sendHello()} color="primary">Hello</Button>
          </div>
          <div class="separator" style={this.styles.separator}></div>
          <div style={this.styles.form}>
            <Label for="echoId">{this.state.messageEcho}</Label>
            <Input onChange={this.handleChange} type="echo" name="echoId" id="echoId" placeholder="Echo form" />
            <Button onClick={() => this.sendEcho()} color="primary">Echo</Button>
          </div>
        </header>
      </div>
    )
  }
}

export default App;

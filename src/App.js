import React, { Component } from 'react';
// eslint-disable-next-line
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.active ? 'active' : 'not active');
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div
        id="testDiv"
        className={!this.state.active ? 'testDiv-closed' : 'testDiv-open'}
        onClick={this.handleClick}
      />
    );
  }
}

export default App;

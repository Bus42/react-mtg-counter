import React, { Component } from 'react';
// eslint-disable-next-line
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      life: 20,
      name: 'player',
      isWinner: false,
      isDead: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    return (
      <div
        id="menuDiv"
        className={!this.state.isActive ? 'menuDiv-closed' : 'menuDiv-open'}
        onClick={this.handleClick}
      >
        <Menu />
      </div>
    );
  }
}

export default App;

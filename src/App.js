import React, { Component } from 'react';
// eslint-disable-next-line
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Menu from './components/Menu';
import Player from './components/Player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      PlayerCount: 2
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  renderPlayers() {
    let playerList = [];
    for (let i = 0; i < this.state.PlayerCount; i++) {
      playerList.push(<Player key={i} />);
    }
    return playerList;
  }

  render() {
    return (
      <div id="app-wrapper">
        <div
          id="menuDiv"
          className={this.state.isActive ? 'menuDiv-open' : 'menuDiv-closed'}
        >
          <span
            id="menu-control"
            className={
              this.state.isActive
                ? 'glyphicon glyphicon-menu-up'
                : 'glyphicon glyphicon-menu-down'
            }
            onClick={this.handleClick}
          />
          <Menu />
        </div>
        <div id="playerDiv" className="text-center">
          {this.renderPlayers()}
        </div>
      </div>
    );
  }
}

export default App;

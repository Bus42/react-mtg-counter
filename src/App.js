import React, { Component } from 'react';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Menu from './components/Menu';
import Player from './components/Player';
import PlayerCountForm from './components/PlayerCountForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      playerCount: 2,
      showModal: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.setState = this.setState.bind(this);
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

  showPlayerForm() {
    console.log('showPlayerForm() called');
    this.setState({
      showModal: true
    });
  }

  updatePlayerCount(x) {
    console.log(`updatePlayerCount(${x}) called`);
    this.setState({
      playerCount: { x }
    });
  }

  close() {
    console.log('close() called');
    this.setState({
      showModal: false
    });
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
          <Menu showPlayerForm={this.showPlayerForm} />
        </div>
        <div id="playerDiv" className="text-center">
          {this.renderPlayers()}
        </div>
        <PlayerCountForm
          updatePlayerCount={this.updatePlayerCount}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}

export default App;

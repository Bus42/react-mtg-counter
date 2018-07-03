import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      life: 20,
      name: 'player',
      isWinner: false,
      isDead: false
    };
  }

  handleClick(x) {
    if (x)
      this.setState({
        life: this.state.life + 1
      });
    if (!x)
      this.setState({
        life: this.state.life - 1
      });
  }

  handlechange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Give me a name!"
          onChange={e => this.handlechange(e)}
        />
        <Button onClick={() => this.handleClick(false)}>
          <Glyphicon glyph="plus-sign" />
        </Button>
        {this.state.life}
        <Button onClick={() => this.handleClick(true)}>
          <Glyphicon glyph="minus-sign" />
        </Button>
      </div>
    );
  }
}

export default Player;

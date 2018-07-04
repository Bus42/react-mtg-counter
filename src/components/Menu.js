import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <div className="menuDiv-wrapper">
        <ListGroup>
          <ListGroupItem>
            <p onClick={this.props.showPlayerForm}>Player Count</p>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Menu;

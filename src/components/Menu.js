import React, { Component } from 'react';
import PlayerCountForm from './PlayerCountForm';
import { ListGroup, ListGroupItem, Well } from 'react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <div className="menuDiv-wrapper">
        <Well bsSize="small">
          <ListGroup>
            <ListGroupItem>
              <PlayerCountForm />
            </ListGroupItem>
            <ListGroupItem>
              <p>Background</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Font</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Rules</p>
            </ListGroupItem>
          </ListGroup>
        </Well>
      </div>
    );
  }
}

export default Menu;

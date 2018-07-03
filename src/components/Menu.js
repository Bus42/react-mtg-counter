import React, { Component } from 'react';
import {
  Modal,
  Glyphicon,
  ListGroup,
  ListGroupItem,
  Well
} from 'react-bootstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="menuDiv-wrapper">
        <Well bsSize="small">
          <ListGroup>
            <ListGroupItem>
              <p onClick={this.open}>Player Count</p>
              <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header>
                  <Modal.Title>Player Count</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>How many players will be in this match?</p>
                </Modal.Body>
                <Modal.Footer>
                  <Glyphicon glyph="remove-circle" onClick={this.close} />
                </Modal.Footer>
              </Modal>
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

import React, { Component } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';

class PlayerCountForm extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header>
            <Modal.Title className="text-center">Player Count</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>How many players will be in this match?</p>

            <ButtonGroup className="pull-right">
              <Button onClick={() => this.props.updatePlayerCount(2)}>2</Button>
              <Button onClick={() => this.props.updatePlayerCount(3)}>3</Button>
              <Button onClick={() => this.props.updatePlayerCount(4)}>4</Button>
            </ButtonGroup>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}

export default PlayerCountForm;

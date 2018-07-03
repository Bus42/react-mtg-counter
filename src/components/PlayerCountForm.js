import React, { Component } from 'react';
import {
  Modal,
  Glyphicon,
  FormGroup,
  Radio,
  Button,
  ButtonGroup
} from 'react-bootstrap';

class PlayerCountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedOption: 2
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

  updatePlayers(e) {
    e.preventDefault();
    alert(`updatePlayers() called. Passed: ${e}`);
    this.close();
  }

  render() {
    return (
      <div>
        <p onClick={this.open}>Player Count</p>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title className="text-center">Player Count</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>How many players will be in this match?</p>
            <form onSubmit={e => this.updatePlayers(e)}>
              <FormGroup>
                <Radio name="radioGroup" inline>
                  2
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  3
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  4
                </Radio>
              </FormGroup>
              <ButtonGroup className="pull-right">
                <Button onClick={this.close}>
                  <Glyphicon glyph="remove" />
                </Button>
                <Button type="submit">
                  <Glyphicon glyph="ok" />
                </Button>
              </ButtonGroup>
            </form>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}

export default PlayerCountForm;

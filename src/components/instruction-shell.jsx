import React, { Component } from "react";

import { Form } from 'react-bootstrap';

export default class InstructionShell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Shell</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    );
  }
}

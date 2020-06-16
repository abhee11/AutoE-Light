import React, { Component } from "react";

import { Form } from 'react-bootstrap';
import '../css/instruction-shell.css'

export default class InstructionShell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Form.Label>Shell </Form.Label>
      <Form.Group controlId="exampleForm.ControlTextarea1" id="shell-text-area">
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      </div>
    );
  }
}

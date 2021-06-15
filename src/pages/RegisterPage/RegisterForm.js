import React, { Component } from "react";
import { Panel, Form, FormGroup, FormControl, Button } from "react-bootstrap";

const divStyle = {
  display: "flex",
  alignItems: "center",

};

const panelStyle = {
  backgroundColor: "rgba(255,255,255,0.5)",
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 500,
};

const buttonStyle = {
  marginBottom: 0,
};

class RegisterForm extends Component {
  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");
  }

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="RegisterForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Username" />
            </FormGroup>
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button
                bsStyle="primary"
                type="submit"
                onClick={this.handleFormSubmit}
              >
                Register Now
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }
}

export default RegisterForm;

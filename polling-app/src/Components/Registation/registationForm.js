import React from "react";
import { Form, Button, Navbar, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { registationForm } from "../../Redux/Action/registation";
import { connect } from "react-redux";
import jwt from 'jsonwebtoken';

class Registation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoading: "",
      disable: false,
      option: "admin"
    };
  }
  handleOptionChange = e => {
    e.preventDefault();
    this.setState({ option: e.target.value });
  };
  handleUserChange = e => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.registationRequest(this.state.username, this.state.password, this.state.option);
    if (this.props.registerStatus && this.props.registerStatus.isRegistion) {
      this.setState({ username: "" });
      this.setState({ password: "" });
    }
  };
  render() {
    if (this.props.registerStatus && this.props.registerStatus.isRegistion) {
      this.props.history.push("/login");
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/">
            <Button variant="outline-info">Login</Button>
          </Link>
        </Navbar>
        <div className="login">
          <h1>Sign Up</h1>
        </div>
        <Form className="m-5">
          <Form.Group controlId="formBasicEmail">
            <div>
              {this.props.registerStatus.error &&
                this.props.registerStatus.error.error ? (
                  <h2>{this.props.registerStatus.error.message}</h2>
                ) : null}
            </div>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter UserName..."
              value={this.state.username}
              onChange={this.handleUserChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label> Select User</Form.Label>
            <Form.Control name="option" as="select" onChange={this.handleOptionChange}>
              <option value="Admin">Admin</option>
              <option value="Guest">Guest(User)</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" disabled={this.props.registerStatus.isLoading == true} type="submit" onClick={this.handleSubmit}>
            {this.props.registerStatus.isLoading == true ? (
              <Spinner
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : null}
            {this.props.registerStatus.isLoading == true ? null : <span>Submit</span>}
          </Button>
        </Form>
      </div>
    );
  }
}
const getProps = state => {
  return {
    registerStatus: state.RegistationStatus
  };
};
const dispatchProps = dispatch => ({
  registationRequest: (username, password, option) =>
    dispatch(registationForm(username, password, option))
});
export default connect(getProps, dispatchProps)(Registation);

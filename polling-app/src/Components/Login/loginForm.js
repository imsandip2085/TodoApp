import React from "react";
import { Form, Button, Navbar, Spinner } from "react-bootstrap";
import { loginForm } from "../../Redux/Action/login";
import { LoginError } from "../../Redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogin: ""
    };
  }
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.username !== "" && this.state.password !== ""){
    this.props.logingRequest(this.state.username, this.state.password);
    }
    if (this.props.LoginStatus && this.props.LoginStatus.isLogin) {
      this.setState({ username: "" });
      this.setState({ password: "" });
    }
  };

  componentDidUpdate(preProps) {
    const { LoginStatus } = this.props;

    if (LoginStatus.isLogin !== preProps.LoginStatus.isLogin && LoginStatus.isLogin) {
      console.log(LoginStatus.response.data.token, "sscjdvfdvdbffjb")
      if (LoginStatus.response.role === "admin") {
        this.props.history.push("/updatepoll");
      } else {
        this.props.history.push("/dashboard");
      }
    }
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/registation">
            <Button className="float-right" variant="outline-info">
              SignUp
            </Button>
          </Link>
        </Navbar>
        <div className="login">
          <h1>Log In</h1>
        </div>
        <Form className="m-5">
          <Form.Group controlId="formBasicEmail">
            <div>
              {this.props.LoginStatus.response &&
                this.props.LoginStatus.response.error ? (
                  <h2>{this.props.LoginStatus.response.data}</h2>
                ) : null}
            </div>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username..."
              value={this.state.username}
              onChange={this.handleUsernameChange}
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
          <Button variant="primary" type="submit" disabled={this.props.LoginStatus.isLoading == true} onClick={this.handleSubmit}>
            {this.props.LoginStatus.isLoading == true ? (
              <Spinner animation="border" size="sm" />
            ) : null}
            {this.props.LoginStatus.isLoading == true ? null : <span>Submit</span>}
          </Button>
        </Form>
      </div>
    );
  }
}

const getProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

const dispatchProps = dispatch => ({
  logingRequest: (username, password) => dispatch(loginForm(username, password))
});
export default connect(getProps, dispatchProps)(Login);

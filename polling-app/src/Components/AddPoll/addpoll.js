import React from "react";
import { Navbar, Button, Container, Row, Col, Form } from "react-bootstrap";
import { AddNewPollForm } from "../../Redux/Action/addNewPoll";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      options: []
    };
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ option: e.target.value });
  };
  handleSubmit = event => {
    this.props.addNewPollRequest(this.state.title, this.state.option);
    event.preventDefault();
    console.log(this.state.title);
  };
  handleAddOption = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { options: [...prevState.options, ""] };
    });
  };
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/dashboard">
            <Button variant="success">Dashboard</Button>
          </Link>
        </Navbar>
        <div className="login">
          <h1>Create Poll</h1>
        </div>
        <Container style={{ margin: "40px 1px" }}>
          <Row className="justify-content-md-center">
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Add Title</Form.Label>
                  <Form.Control
                    type="type"
                    placeholder="Add Your Title....."
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                {this.state.options.map(options => {
                  return (
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Option</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Option...."
                        value={this.state.option}
                        onChange={this.handlePasswordChange}
                      />
                    </Form.Group>
                  );
                })}
                <Button variant="primary" onClick={this.handleSubmit}>
                  Add Poll
                </Button>{" "}
                <Button variant="primary" onClick={this.handleAddOption}>
                  Add Option
                </Button>{" "}
                <Button variant="primary">Delete Option</Button>{" "}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const getProps = state => {
  return {
    addNewPollStatus: state.AddNewPollStatus
  };
};

const dispatchProps = dispatch => ({
  addNewPollRequest: (title, option) => dispatch(AddNewPollForm(title, option))
});
export default connect(getProps, dispatchProps)(AddPoll);

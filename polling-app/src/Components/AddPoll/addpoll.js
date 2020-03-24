import React from "react";
import {
  Navbar,
  Button,
  Container,
  Row,
  Col,
  Form,
  InputGroup
} from "react-bootstrap";
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
  handleOptionChange = (e, index) => {
    const data = this.state.options;
    data[index] = e.target.value;
    this.setState({ options: data });
  };
  handleSubmit = event => {
    this.props.addNewPollRequest(this.state.title, this.state.options);
    event.preventDefault();
  };
  handleAddOption = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { options: [...prevState.options, ""] };
    });
  };
  handleDeleteOption = (e, index) => {
    e.preventDefault();
    this.state.options.splice(index, 1);
    this.setState({ options: this.state.options });
  };
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/updatepoll" className="ml-4">
            <Button variant="success">Update Poll</Button>
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
                {this.state.options.map((options, index) => {
                  return (
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Option{index + 1}</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Enter Option...."
                          value={this.state.options[index]}
                          onChange={e => this.handleOptionChange(e, index)}
                        />
                        <Button
                          className="ml-4"
                          variant="danger"
                          value={index}
                          onClick={e => this.handleDeleteOption(e, index)}
                        >
                          Delete Option
                        </Button>
                      </InputGroup>
                    </Form.Group>
                  );
                })}
                {!this.state.options.length == 0 ? (
                  <Button variant="primary" onClick={this.handleSubmit}>
                    Add Poll
                  </Button>
                ) : null}{" "}
                {!this.state.title == 0 ? (
                  <Button variant="primary" onClick={this.handleAddOption}>
                    Add Option
                  </Button>
                ) : null}{" "}
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
  addNewPollRequest: (title, options) => dispatch(AddNewPollForm(title, options))
});
export default connect(getProps, dispatchProps)(AddPoll);

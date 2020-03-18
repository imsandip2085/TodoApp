import React from "react";
import { Navbar, Card, Button, Modal,InputGroup,FormControl } from "react-bootstrap";

class DashBoard1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: false,
      newOption: false,
      deleteOption : false
    };
  }

  handleTitleShow = () => {
    this.setState({ showTitle: true });
  };
  handleTitleClose = () => {
    this.setState({ showTitle: false });
  };
  handleNewOptionShow = () => {
    this.setState({ newOption: true });
  };
  handleNewOptionClose = () => {
    this.setState({ newOption: false });
  };
  handleDeleteOptionShow = () => {
    this.setState({ newOption: true });
  };
  handleDeleteOptionClose = () => {
    this.setState({ newOption: false });
  };
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
        </Navbar>
        <div className="login">
          <h1>Take Poll</h1>
        </div>
        <Card
          style={{ width: "40rem", margin: "40px 120px" }}
          className={"card"}
        >
          <Card.Body>
            <Card.Title>Title : </Card.Title>
            Options :
            <ul>
              <li>a) opt1 </li>
              <li>b) opt2</li>
              <li>c) opt3</li>
              <li>d) opt4</li>
            </ul>
            <hr />
            <Button variant="outline-info" onClick={this.handleTitleShow}>
              Edit Title
            </Button>{" "}
            <Button variant="outline-info" onClick={this.handleNewOptionShow}>New Option</Button>{" "}
            <Button variant="outline-danger"  onClick={this.handleDeleteOptionShow}>Delete Option</Button>{" "}
            <Button variant="outline-danger" >Delete Poll</Button>
             {/* Edit Title */}
            <Modal show={this.state.showTitle} onHide={this.handleTitleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Title</Modal.Title>
              </Modal.Header>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Title...."
                  />
                </InputGroup>
              <Modal.Footer>
                <Button variant="primary" onClick={this.handleTitleClose}>
                  Update
                </Button>
              </Modal.Footer>
            </Modal>
             {/* New OPTION */}
             <Modal  show={this.state.newOption} onHide={this.handleNewOptionClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Option</Modal.Title>
              </Modal.Header>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="New Option...."
                  />
                </InputGroup>
              <Modal.Footer>
                <Button variant="primary" onClick={this.handleNewOptionClose}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
             {/* delete option */}
             <Modal show={this.state.show} onHide={this.handleDeleteOptionClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Option</Modal.Title>
              </Modal.Header>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="New Option...."
                  />
                </InputGroup>
              <Modal.Footer>
                <Button variant="primary" onClick={this.handleDeleteOptionClose}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default DashBoard1;

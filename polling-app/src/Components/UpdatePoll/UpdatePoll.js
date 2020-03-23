import React from "react";
import {
  Navbar,
  Card,
  Button,
  Modal,
  InputGroup,
  FormControl,
  Toast,
  ToastHeader,
  ToastBody
} from "react-bootstrap";
// import UpdatePoll from "../../Redux/Reducer/polling/updatePoll";
import { addPollAction } from "../../Redux/Action/Poll/getPollAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateTitleForm } from "../../Redux/Action/UpdatePoll/updateTitle";
import { addNewOptionForm } from "../../Redux/Action/UpdatePoll/addNewOption";
import { deletePollForm } from "../../Redux/Action/UpdatePoll/deletePoll";


class UpdatePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: false,
      newOptionShow: false,
      deleteOption: false,
      title: "",
      newOption: "",
      id: ""
    };
  }
  componentDidMount = () => {
    this.props.AddPollStatus();
  };
  componentDidUpdate = () => {
    console.log(this.props.addPollStatus.response.option, "SDGFJHKJHGFDS");
  };

  handleTitleShow = (e, id) => {
    e.preventDefault();
    this.setState({ id: id })
    this.setState({ showTitle: true });
  };
  handleTitleClose = e => {
    this.setState({ showTitle: false });
    e.preventDefault();
    this.props.updateTitleRequest(this.state.title, this.state.id);

  };
  handleNewOptionShow = (e, id) => {
    e.preventDefault();
    this.setState({ id: id })
    this.setState({ newOptionShow: true });
  };
  handleNewOptionClose = (e) => {
    this.setState({ newOptionShow: false });
    e.preventDefault();
    this.props.addNewOptionRequest(this.state.id, this.state.newOption);
  };
  handleDeletePoll = (e, id) => {
    e.preventDefault();
    this.props.deletePollRequest(id);
    console.log(id, "dfgojodb;kfvlcvc");
  }
  handleChangeTitle = e => {
    this.setState({ title: e.target.value });
  };
  handleChangeAddNewOption = e => {
    this.setState({ newOption: e.target.value });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/dashboard" className="ml-4">
            <Button variant="success">Dashboard</Button>
          </Link>
          <Link to="/dashboard/addpoll" className="ml-4">
            <Button variant="success">Add Poll</Button>
          </Link>
        </Navbar>
        <div className="login">
          <h1>Update Poll</h1>
        </div>
        {this.props.addPollStatus.response &&
          this.props.addPollStatus.response.length &&
          this.props.addPollStatus.response.map((val, index) => {
            return (
              <Card
                className={"card"}
                className="m-4"
              >
                <Card.Body>
                  <Card.Title>Title : {val.title}</Card.Title>
                  Options :
                  <ul>
                    {val.options.map(res => {
                      return (
                        <div>
                          <li>{res.option}<Toast className="toast"><ToastHeader></ToastHeader> </Toast> </li>
                        </div>
                      )
                    })}
                  </ul>
                  <hr />
                  <Button variant="outline-info" value={val._id} onClick={(e) => this.handleTitleShow(e, val._id)}>
                    Edit Title
                  </Button>{" "}
                  <Button
                    variant="outline-info" value={val._id}
                    onClick={(e) => this.handleNewOptionShow(e, val._id)}
                  >
                    New Option
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    onClick={this.handleDeleteOptionShow}
                  >
                    Delete Option
                  </Button>{" "}
                  <Button variant="outline-danger" value={val._id} onClick={(e) => this.handleDeletePoll(e, val._id)}>Delete Poll</Button>

                </Card.Body>
              </Card>
            );
          })}
        {/* Edit Title */}
        <Modal show={this.state.showTitle} onHide={this.handleTitleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Title</Modal.Title>
          </Modal.Header>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Title...."
              value={this.state.title}
              onChange={this.handleChangeTitle}
            />
          </InputGroup>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleTitleClose}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
        {/* New OPTION */}
        <Modal show={this.state.newOptionShow} onHide={this.handleNewOptionClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Option</Modal.Title>
          </Modal.Header>
          <InputGroup className="mb-3">
            <FormControl placeholder="New Option...."
              value={this.state.newOption}
              onChange={this.handleChangeAddNewOption}
            />
          </InputGroup>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleNewOptionClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const getProps = state => {
  return {
    addPollStatus: state.AddPollStatus,
    updateTitleStatus: state.UpdateTitleStatus,
    addNewOptionStatus: state.AddNewOptionStatus,
    deleteOptionStatus: state.DeleteOptionStatus
  };
};
const dispatchProps = dispatch => ({
  AddPollStatus: () => dispatch(addPollAction()),
  updateTitleRequest: (title, id) => dispatch(updateTitleForm(title, id)),
  addNewOptionRequest: (id, newOption) => dispatch(addNewOptionForm(id, newOption)),
  deletePollRequest: (id) => dispatch(deletePollForm(id))
});
export default connect(getProps, dispatchProps)(UpdatePoll);

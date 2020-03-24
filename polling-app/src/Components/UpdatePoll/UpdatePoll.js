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
import { addPollAction } from "../../Redux/Action/Poll/getPollAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateTitleForm } from "../../Redux/Action/UpdatePoll/updateTitle";
import { addNewOptionForm } from "../../Redux/Action/UpdatePoll/addNewOption";
import { deletePollForm } from "../../Redux/Action/UpdatePoll/deletePoll";
import { deleteOptionForm } from "../../Redux/Action/UpdatePoll/deleteOption";
import DeleteOptionConfirmationBox from './DeleteOptionConfirmationBox';
import DeletePollConfirmationBox from "./DeletePollConformationBox";
import UpdateTitleConfirmationBox from './UpdateTitleConfirm';
import AddNewOptionConfirmationBox from './AddNewOption';
import { loginForm } from "../../Redux/Action/login";


class UpdatePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: false,
      newOptionShow: false,
      deleteOptionShow: false,
      deletePollShow: false,
      title: "",
      newOption: [],
      id: "",
      deleteOptionValue: false,
    };
  }
  componentDidMount = () => {
    this.props.AddPollStatus();
  };
  componentDidUpdate = () => {

  };
  handleShowEditTitleModele = (e, id, titleText) => {
    this.setState({ showTitle: true, editTitleId: id, titleText1: titleText });

  };
  handleEditTitleModel = (e, id, titleText) => {
    this.setState({ showTitle: false });
    this.props.updateTitleRequest(this.state.title, this.state.editTitleId);

  };
  handleHideEditTitleModel = (e, id, titleText) => {
    this.setState({ showTitle: false })
  }
  handleChangeTitle = (e, titleText) => {
    this.setState({ title: e.target.value });
  };
  handleShowNewOptionModele = (e, id) => {
    this.setState({ newOptionShow: true, newOptionId: id });
  };
  handleAddNewOptionModel = (e) => {
    this.setState({ newOptionShow: false });
    this.props.addNewOptionRequest(this.state.newOptionId, this.state.newOption);
  };
  handleHideAddNewOptionModel = (e, id) => {
    this.setState({ newOptionShow: false })
  }
  handleChangeAddNewOption = (e) => {
    this.setState({ newOption: e.target.value });

  }
  handleDeleteOption = (e, id, text) => {
    this.setState({ deleteOptionShow: false })
    this.props.deleteOptionRequest(this.state.deleteId, this.state.deleteText);
  }
  handleDeleteModel = (e, id, text) => {
    this.setState({ deleteOptionShow: true, deleteId: id, deleteText: text })
  }
  handleHideModel = (e, id, text) => {
    this.setState({ deleteOptionShow: false })
  }
  handleDeletePoll = (e, id) => {
    this.setState({ deletePollShow: false })
    this.props.deletePollRequest(this.state.deletePollId);
  }
  handleShowDeletePollModele = (e, id) => {
    this.setState({ deletePollShow: true, deletePollId: id })
  }
  handleDeletePollHideModel = (e, id) => {
    this.setState({ deletePollShow: false })
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/updatepoll/addpoll" className="ml-4">
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
                    {val.options.map((res, index) => {

                      return (
                        <div>
                          <li className={'mt-3'} > <span className="pl-4">{res.vote}</span> {res.option}<Toast className="toast">
                            <ToastHeader optionId={val._id} onClick={(e) => this.handleDeleteModel(e, val._id, res.option)}>
                            </ToastHeader>
                          </Toast>
                          </li>
                        </div>
                      )
                    })}
                  </ul>
                  <hr />
                  <Button variant="outline-info" value={val._id} onClick={(e) => this.handleShowEditTitleModele(e, val._id, val.title)}>
                    Edit Title
                  </Button>{" "}
                  <Button
                    variant="outline-info" value={val._id}
                    onClick={(e) => this.handleShowNewOptionModele(e, val._id)}
                  >
                    New Option
                  </Button>{" "}
                  <Button variant="outline-danger" value={val._id} onClick={(e) => this.handleShowDeletePollModele(e, val._id)}>Delete Poll</Button>
                </Card.Body>
              </Card>
            );
          })}
        <UpdateTitleConfirmationBox Show={this.state.showTitle}
          handleChangeTitle={this.handleChangeTitle}
          handleEditTitleModel={this.handleEditTitleModel}
          handleHideEditTitleModel={this.handleHideEditTitleModel}
        />
        <AddNewOptionConfirmationBox Show={this.state.newOptionShow}
          handleHideAddNewOptionModel={this.handleHideAddNewOptionModel}
          handleAddNewOptionModel={this.handleAddNewOptionModel}
          handleChangeAddNewOption={this.handleChangeAddNewOption}
        />
        <DeletePollConfirmationBox Show={this.state.deletePollShow}
          handleDeletePoll={this.handleDeletePoll}
          handleDeletePollHideModel={this.handleDeletePollHideModel}
        />
        <DeleteOptionConfirmationBox Show={this.state.deleteOptionShow}
          handleDeleteOption={this.handleDeleteOption}
          handleHideModel={this.handleHideModel}
        />
      </div>
    );
  }
}
const getProps = state => {
  return {
    addPollStatus: state.AddPollStatus,
    updateTitleStatus: state.UpdateTitleStatus,
    addNewOptionStatus: state.AddNewOptionStatus,
    deletePollStatus: state.DeletePollStatus
  };
};
const dispatchProps = dispatch => ({
  AddPollStatus: () => dispatch(addPollAction()),
  updateTitleRequest: (title, id) => dispatch(updateTitleForm(title, id)),
  addNewOptionRequest: (id, newOption) => dispatch(addNewOptionForm(id, newOption)),
  deletePollRequest: (id) => dispatch(deletePollForm(id)),
  deleteOptionRequest: (id, text) => dispatch(deleteOptionForm(id, text))
});
export default connect(getProps, dispatchProps)(UpdatePoll);

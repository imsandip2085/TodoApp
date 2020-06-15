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
  ToastBody,Form,Row,Col
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
import * as _ from "lodash";




class UpdatePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: false,
      newOptionShow: false,
      deleteOptionShow: false,
      deletePollShow: false,
      warningShow: false,
      warningShow1: false,
      title: "",
      newOption: [],
      id: "",
      deleteOptionValue: false,
      currentPageStart : 0,
      options : 5
    };
  }
  componentDidMount = () => {
    this.props.AddPollStatus();
  };
  componentDidUpdate = () => {

  };
 
  handleOptionChange = e => {
    e.preventDefault();
    this.setState({ options: e.target.value });
  };
 
  handleShowEditTitleModele = (e, id, titleText, ) => {
    this.setState({ showTitle: true, editTitleId: id, titleText1: titleText });
  };
  handleEditTitleModel = (e, id, titleText) => {
    this.setState({ showTitle: false });
    if (this.state.title !== "") {
      this.props.updateTitleRequest(this.state.title, this.state.editTitleId);
    }
  };
  handleHideEditTitleModel = (e, id, titleText) => {
    this.setState({ showTitle: false })
  }
  handleChangeTitle = (e, titleText) => {
    this.setState({ titleText1: e.target.value });
    this.setState({ title: e.target.value });
  };
  handleShowNewOptionModele = (e, id) => {
    this.setState({ newOptionShow: true, newOptionId: id });
    this.setState({ newOption: '' });
  };
  handleAddNewOptionModel = (e) => {
    this.setState({ newOptionShow: false });
    if (this.state.newOption != "") {
      this.props.addNewOptionRequest(this.state.newOptionId, this.state.newOption);
    }
  };
  handleHideAddNewOptionModel = (e, id) => {
    this.setState({ newOptionShow: false })
  }
  handleChangeAddNewOption = (e) => {
    this.setState({ newOption: e.target.value });
  }
  handleDeleteOption = (e, id, text) => {
    this.setState({ deleteOptionShow: false })
    if (this.state.valOptions.length !== 1 && this.state.voteValue !== 1) {
      this.props.deleteOptionRequest(this.state.deleteId, this.state.deleteText);
    }
  }
  handleDeleteModel = (e, id, text, index, vote, options) => {

    if (vote == 1) {
      this.setState({ warningShow1: true })
    } else {
      this.setState({ warningShow1: false })
    }
    this.setState({ deleteOptionShow: true, deleteId: id, deleteText: text, deleteOptionIndex: index, voteValue: vote, valOptions: options })
  }
  handleHideModel = (e, id, text) => {
    this.setState({ deleteOptionShow: false })
  }
  handleDeletePoll = (e, id) => {
    this.setState({ deletePollShow: false })
    this.props.deletePollRequest(this.state.deletePollId);
  }
  handleShowDeletePollModele = (e, id, text, valOptions) => {
    this.setState({ warningShow: false })
    valOptions.map((res1) => {
      if (res1.vote == 1) {
        this.setState({ warningShow: true })
      }
    }
    )
    this.setState({ deletePollShow: true, deletePollId: id, deleteTitle: text })
  }
  handleDeletePollHideModel = (e, id) => {
    this.setState({ deletePollShow: false })
  }
  handleLogOut = () => {
    localStorage.clear();
    this.props.history.push("/login");
  }

  handleNextSubmit = () =>{
    if(this.props.addPollStatus.response.length > this.state.currentPageStart + 6 ){
   this.setState((state, props) => ({
     currentPageStart: state.currentPageStart + 5
   }))
 }
 }
 
 handlePrevSubmit =() =>{
   if(this.state.currentPageStart > 1){
     this.setState((state, props) => ({
       currentPageStart: state.currentPageStart - this.state
     }))
   }
 }

  render() {
    // const iteratees = obj => obj.title;
    // const sorted = _.sortBy(this.props.addPollStatus.response, iteratees);
    const cardList = this.props.addPollStatus.response.reverse();
    const cardListPerPage = this.props.addPollStatus.response.length / this.state.options;
    //  if(cardListPerPage == )
    console.log(this.state.options, "ddddddddddddddd");

    if (Number.isInteger(cardListPerPage)) {
      var totalCardPerPage = cardListPerPage;
    } else {
      var totalCardPerPage = Math.floor(cardListPerPage) + 1;
    }
    const cardListItem = this.props.addPollStatus.response.slice(this.state.currentPageStart, this.state.currentPageStart+5);
    
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/updatepoll/addpoll" className="ml-4">
            <Button variant="success">Add Poll</Button>
          </Link>
          <Link to="/" className="ml-4"  >
            <Button className="button" variant="danger" onClick={this.handleLogOut}>Log Out</Button>
          </Link>
        </Navbar>
        <div className="login">
        <Row>
          <Col>
          <h1>Update Poll</h1>
          </Col>
          <Col>
          <Form.Group controlId="exampleForm.ControlSelect1"  className="formControl">
            <Form.Control name="option" as="select" onChange={this.handleOptionChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Control>
          </Form.Group>
          </Col>
        </Row>
        </div>
        {cardListItem.map((val, key) => {
          const sorted1 = _.sortBy(val.options, 'option');
          return (
            <Card
              className={"card"}
              className="m-4"
            >
              <Card.Body>
                {val.disabled = localStorage.getItem(val._id) ? true : false}
                Options :  {val.title}
                <ul>
                  {sorted1.map((res, index) => {
                    {
                      localStorage.setItem("vote1", res.vote);
                    }
                    return (
                      <div>
                        <li className={'mt-3'} > <span className="pl-4">{res.vote}</span>{res.option}<Toast className="toast">
                          <ToastHeader optionId={val._id} onClick={(e) => this.handleDeleteModel(e, val._id, res.option, index, res.vote, val.options)}>
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
                <Button variant="outline-danger" value={val._id} onClick={(e) => this.handleShowDeletePollModele(e, val._id, val.title, val.options)}>Delete Poll</Button>
              </Card.Body>
            </Card>
          );
        })}
        <UpdateTitleConfirmationBox Show={this.state.showTitle}
          textTitle={this.state.titleText1}
          handleChangeTitle={this.handleChangeTitle}
          handleEditTitleModel={this.handleEditTitleModel}
          handleHideEditTitleModel={this.handleHideEditTitleModel}
        />
        <AddNewOptionConfirmationBox Show={this.state.newOptionShow}
          handleHideAddNewOptionModel={this.handleHideAddNewOptionModel}
          handleAddNewOptionModel={this.handleAddNewOptionModel}
          handleChangeAddNewOption={this.handleChangeAddNewOption}
          optionText={this.state.deleteText}
        />
        <DeletePollConfirmationBox Show={this.state.deletePollShow}
          Warning={this.state.warningShow}
          handleDeletePoll={this.handleDeletePoll}
          handleDeletePollHideModel={this.handleDeletePollHideModel}
          deleteTitle={this.state.deleteTitle}
        />
        <DeleteOptionConfirmationBox Show={this.state.deleteOptionShow}
          Warning1={this.state.warningShow1}
          handleDeleteOption={this.handleDeleteOption}
          handleHideModel={this.handleHideModel}
          optionText={this.state.deleteText}
        />
         <div style={{ margin: "40px 30px" }} >
        <Button variant="outline-primary" onClick={this.handlePrevSubmit}>Previous</Button>{ '' }
        <Button variant="outline-primary" className="ml-5" onClick={this.handleNextSubmit}>Next</Button>
        </div>
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

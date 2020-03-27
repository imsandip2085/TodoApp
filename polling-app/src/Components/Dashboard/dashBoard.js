import React from "react";
import { Navbar, Card, Button } from "react-bootstrap";
import { addPollAction } from "../../Redux/Action/Poll/getPollAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetVote } from "../../Redux/Action/Poll/getVote";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount = () => {
    this.props.AddPollStatus();
  };
  componentDidUpdate = () => {
  };

  handleVoteClick = async (id, text) => {
    const userToken = await localStorage.getItem('token')
    const userData = await localStorage.getItem('vote');
    localStorage.setItem(id, text)
    this.props.getVoteRequest(id, text, userToken);
  }
  handleClick = () => {
    let tokenValue = localStorage.getItem('token');
    localStorage.setItem("token1", tokenValue === '');
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Button variant="outline-info" onClick={this.handleClick}>Log Out</Button>
        </Navbar>
        <div className="login">
          <h1>Take Poll</h1>
        </div>
        {this.props.addPollStatus.response &&
          this.props.addPollStatus.response.length &&
          this.props.addPollStatus.response.map((val, key) => {
            let currentId = val._id;
            return (
              <Card style={{ margin: "40px 60px" }} className={"card"}>
                <Card.Body>
                  <Card.Title>Title : {val.title}</Card.Title>
                  {val.disabled = localStorage.getItem(val._id) ? true : false}
                  Options :
                  <ul>
                    {val.options.map((res, index) => {
                      return (
                        <li>
                          {res.option == localStorage.getItem(val._id)}
                          <input type="radio" name={val._id} checked={res.option == localStorage.getItem(val._id)} disabled={val.disabled} onClick={(e) => this.handleVoteClick(val._id, res.option)}></input>
                          <label className="pl-4">{res.option}</label>
                        </li>
                      );
                    })}
                  </ul>
                  <hr />
                </Card.Body>
              </Card>
            );
          })}
      </div>
    );
  }
}
const getProps = state => {
  return {
    addPollStatus: state.AddPollStatus,
    getVoteStatus: state.GetVoteStatus,
    LoginStatus: state.LoginStatus
  };
};
const dispatchProps = dispatch => ({
  AddPollStatus: () => dispatch(addPollAction()),
  getVoteRequest: (id, text, userToken) => dispatch(GetVote(id, text, userToken))
});
export default connect(getProps, dispatchProps)(DashBoard);

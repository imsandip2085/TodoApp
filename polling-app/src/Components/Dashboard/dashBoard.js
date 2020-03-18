import React from "react";
import { Navbar, Card, Button } from "react-bootstrap";
import { getPollAction } from "../../Redux/Action/Poll/getPollAction";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.GetPollStatus();
  };
  componentDidUpdate = () => {
    console.log(this.props.getPollStatus.response[0], "sandip");
  };
  render() {
    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to='/dashboard/addpoll'>
          <Button variant="success" >Add Poll</Button>
          </Link>
        </Navbar>
        <div className="login">
          <h1>Take Poll</h1>
        </div>
        {this.props.getPollStatus.response &&
          this.props.getPollStatus.response.length &&
          this.props.getPollStatus.response.map((val, key) => {
            return (
              <Card style={{ margin: "40px 60px" }} className={"card"}>
                <Card.Body>
                  <Card.Title>Title : {val.title} </Card.Title>
                  Options :
                  <ul>
                    {val.options.map(res => {
                      return (
                        <li>
                          <input
                            type="radio"
                            value={res.vote}
                            checked={res.vote}
                          ></input>
                          {res.option}
                          {res.vote}
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
    getPollStatus: state.GetPollStatus
  };
};
const dispatchProps = dispatch => ({
  GetPollStatus: () => dispatch(getPollAction())
});
export default connect(getProps, dispatchProps)(DashBoard);

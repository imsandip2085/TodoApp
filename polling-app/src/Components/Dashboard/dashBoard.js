import React from "react";
import { Navbar, Card } from "react-bootstrap";

class DashBoard extends React.Component {
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
          style={{ width: "18rem", margin: "40px 120px" }}
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
            <hr/>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", margin: "40px 120px" }}
          className={"card"}
        >
          <Card.Body>
            <Card.Title>Title : </Card.Title>
            Options : <br/>
            
         
           
            <hr/>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", margin: "40px 120px" }}
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
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default DashBoard;

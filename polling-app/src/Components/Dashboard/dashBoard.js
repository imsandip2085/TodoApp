import React, { useState, useEffect } from "react";
import { Navbar, Card, Button } from "react-bootstrap";
import { addPollAction } from "../../Redux/Action/Poll/getPollAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetVote } from "../../Redux/Action/Poll/getVote";
import * as _ from "lodash";
import { Redirect } from "react-router-dom";

// class DashBoard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPageStart :  0
//     };
//   }
//   componentDidMount = () => {
//     this.props.AddPollStatus();
//   };
//   componentDidUpdate = () => {
//   };

//   handleVoteClick = async (id, text) => {
//     const userToken = await localStorage.getItem('token')
//     const userData = await localStorage.getItem('vote');
//     localStorage.setItem(id, text)
//     this.props.getVoteRequest(id, text, userToken);
//   }
//   handleClick = () => {
//     localStorage.clear();
//     this.props.history.push("/login");
//   }
  
//    handleNextSubmit = () =>{
//      if(this.props.addPollStatus.response.length > this.state.currentPageStart + 6 ){
//     this.setState((state, props) => ({
//       currentPageStart: state.currentPageStart + 5
//     }))
//   }
//   }
  
//   handlePrevSubmit =() =>{
//     if(this.state.currentPageStart > 1){
//       this.setState((state, props) => ({
//         currentPageStart: state.currentPageStart - 5
//       }))
//     }
//   }

//   render() {
//     // const iteratees = obj => obj.title;
//     // const sorted = _.sortBy(this.props.addPollStatus.response, iteratees);
//     const cardList = this.props.addPollStatus.response.reverse();
//     const cardListPerPage = this.props.addPollStatus.response.length / 5;
//     //  if(cardListPerPage == )
//     if (Number.isInteger(cardListPerPage)) {
//       var totalCardPerPage = cardListPerPage;
//     } else {
//       var totalCardPerPage = Math.floor(cardListPerPage) + 1;
//     }
//     const cardListItem = this.props.addPollStatus.response.slice(this.state.currentPageStart, this.state.currentPageStart+5);
    

//     return (
//       <div>
//         <Navbar className="navbar" bg="dark" variant="dark">
//           <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
//           <Link to="/">
//             <Button variant="danger" onClick={this.handleClick}>Log Out</Button>
//           </Link>
//         </Navbar>
//         <div className="login">
//           <h1>Take Poll</h1>
//         </div>
//         {cardListItem.map((val, key) => {
//           return (
//             <div>
//             <Card style={{ margin: "40px 60px" }} className={"card"}>
//               <Card.Body>
//                 <Card.Title>Title : {val.title}</Card.Title>
//                 {val.disabled = localStorage.getItem(val._id) ? true : false}
//                 Options :
//                   <ul>
//                   {val.options.map((res, index) => {
//                     return (
//                       <li>
//                         {res.option == localStorage.getItem(val._id)}
//                         <input type="radio" name={val._id} checked={res.option == localStorage.getItem(val._id)} disabled={val.disabled} onClick={(e) => this.handleVoteClick(val._id, res.option)}></input>
//                         <label className="pl-4">{res.option}</label>
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <hr />
//               </Card.Body>
//             </Card>
//             </div>
//           );
//         })}
//         <div style={{ margin: "40px 60px" }} >
//         <Button variant="outline-primary" onClick={this.handlePrevSubmit}>Previous</Button>{ '' }
//         <Button variant="outline-info" className="ml-5" onClick={this.handleNextSubmit}>Next</Button>
//         </div>
//       </div>
//     );
//   }
// }
// const getProps = state => {
//   return {
//     addPollStatus: state.AddPollStatus,
//     getVoteStatus: state.GetVoteStatus,
//     LoginStatus: state.LoginStatus
//   };
// };
// const dispatchProps = dispatch => ({
//   AddPollStatus: () => dispatch(addPollAction()),
//   getVoteRequest: (id, text, userToken) => dispatch(GetVote(id, text, userToken))
// });
// export default connect(getProps, dispatchProps)(DashBoard);

function DashBoard (props) {
  const [currentPageStart , setCurrentPageStart] = useState(0);
  const [cardListPerPage , setCardListPerPage] = useState([]);
  const [cardLength , setCardLength] = useState();


  useEffect(() =>{
  const { response } = props.addPollStatus;
  const cardList = response && response.reverse();
  const totalLengthofCard = response && response.length;
  const totalPageNumberOfCard = response && response.length / 5;
  if (Number.isInteger(totalPageNumberOfCard)) {
    var totalPageOfcard = totalPageNumberOfCard;
  } else {
    var totalPageOfcard = Math.floor(totalPageNumberOfCard) + 1;
  }
  const cardListItem = cardList && cardList.slice(currentPageStart,currentPageStart+5);
  setCardListPerPage(cardListItem);
  setCardLength(totalLengthofCard)
  },[props.addPollStatus.response])

  useEffect (() =>{
    props.getAddPollRequest();
  },[])
  

 const handleVoteClick = async (id, text) => {
    const userToken = await localStorage.getItem('token')
    const userData = await localStorage.getItem('vote');
    localStorage.setItem(id, text)
    props.getVoteRequest(id, text, userToken);
  }
 const handleClick = () => {
    localStorage.clear();
    props.history.push("/login");
  }
  
   const handleNextSubmit = () =>{
     if(cardLength > currentPageStart + 6 ){
      const nextPages = currentPageStart + 5 ;
      setCurrentPageStart(nextPages)
  }
  }
  
  const handlePrevSubmit =() =>{
    if(currentPageStart > 1){
      const prevPages = currentPageStart - 5 ;
      setCurrentPageStart(prevPages)
    }
  }

    return (
      <div>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
          <Link to="/">
            <Button variant="danger" onClick={handleClick}>Log Out</Button>
          </Link>
        </Navbar>
        <div className="login">
          <h1>Take Poll</h1>
        </div>
        {cardListPerPage.map((val, key) => {
          return (
            <div>
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
                        <input type="radio" name={val._id} checked={res.option == localStorage.getItem(val._id)} disabled={val.disabled} onClick={(e) => handleVoteClick(val._id, res.option)}></input>
                        <label className="pl-4">{res.option}</label>
                      </li>
                    );
                  })}
                </ul>
                <hr />
              </Card.Body>
            </Card>
            </div>
          );
        })}
        <div style={{ margin: "40px 60px" }} >
        <Button variant="outline-primary" onClick={handlePrevSubmit}>Previous</Button>{ '' }
        <Button variant="outline-info" className="ml-5" onClick={handleNextSubmit}>Next</Button>
        </div>
      </div>
    );
}
const mapStateToProps = state => {
  return {
    addPollStatus: state.AddPollStatus,
    getVoteStatus: state.GetVoteStatus,
    LoginStatus: state.LoginStatus
  };
};
const mapDispatchToProps = dispatch => ({
  getAddPollRequest: () => dispatch(addPollAction()),
  getVoteRequest: (id, text, userToken) => dispatch(GetVote(id, text, userToken))
});
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
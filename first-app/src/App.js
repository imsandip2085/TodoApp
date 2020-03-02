import React from "react";
import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./Todo";
import Forms from "./Form";
import data1 from "./data.json";

// import { Item } from 'react-bootstrap/lib/Breadcrumb';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: "",
      data: data1
    };
  }
  addNewItem = Item => {
    let newDataArray = this.state.data;
    if(Item !== "" ){
    newDataArray.push({ id: 1, name: Item, checked: false });
    }
    this.setState({ data: newDataArray });
  };
  handleChangeEvent = Items => {
    console.log(Items);
    let data = this.state.data.map(val => {
      if (val.name === Items) {
        val.checked = !val.checked;
      }
      return val
    });
  
    this.setState({ data: data });
  };
  render() {
    return (
      <div>
        <Todo
          data={this.state.data}
          handleChangeEvent={this.handleChangeEvent}
        />
        <Forms addNewItem={this.addNewItem} />
      </div>
    );
  }
}
export default App;

import React from "react";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      onclick: true
    };
  }
  
  handleSubmit = e => {
    this.props.addNewItem(this.state.title)
    this.setState({ title: "" });
    e.preventDefault();
    if(this.state.title === ""){
      this.setState({ onclick : false})
    }else{
      this.setState({onclick : true})
    }
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <div className="todoApp">
        <h4>Todo</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={this.state.onclick ? "input1":"input2"}
            placeholder="Todo..."
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
          <br />
          <button type="submit" className="buttonForm">
            submit
          </button>
        </form>
      </div>
    );
  }
}
export default Forms;

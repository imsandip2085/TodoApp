import React from "react";
import data1 from "./data.json";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateItem: false
    };
  }

  handleChange = event => {
    this.props.handleChangeEvent(event.target.name);
  };
  render() {
    return (
      <div className="todoApp">
        <h3>Todo App</h3>
        <ul>
          {this.props.data.map((val, key) => {
            return (
              <li key={key}>
                <input
                  checked={val.checked}
                  type="checkbox"
                  id={val.id}
                  value={val.checked}
                  name={val.name}
                  onChange={this.handleChange}
                />
                <span>{val.name}</span>
                {val.checked ? (
                  <span className="badge badge-secondary ">Checked</span>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Todo;

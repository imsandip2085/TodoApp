import React from "react";
import data1 from "./data.json";

class Todo extends React.Component {
  handleChange = () => {};
  render() {
    return (
      <div className="todoApp">
        <h3>Todo App</h3>
        <ul>
          {data1.map((val, key) => {
            return (
              <li key={key}>
                <input
                  checked={val.checked}
                  type="checkbox"
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

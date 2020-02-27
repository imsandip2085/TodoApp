import React from 'react';


class Forms extends React.Component{
    render(){
        return(
            <div className="todoApp">
                <h4>Todo</h4>
                <input type="text" className="input"></input>
                <button type="submit">submit</button>
            </div>
        )
    }
}
export default Forms;
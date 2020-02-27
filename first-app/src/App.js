import React from 'react';
import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo';
import Forms from './Form';

class App extends React.Component{

  render(){
    return(
    <div >
       <Todo />
       <Forms />
    </div>
    )
  }
}
export default App;

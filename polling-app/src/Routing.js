import React from 'react';
import Login from './Components/Login/loginForm';
import  Registation from './Components/Registation/registationForm';
import DashBoard from './Components/Dashboard/dashBoard';
import AddPoll from './Components/AddPoll/addpoll';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';


class Routing extends React.Component{
    render(){
        return(
            <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/registation" component={Registation} />
                <PrivateRoute exact path="/dashboard" component={DashBoard} />
                <PrivateRoute path='/dashboard/addpoll' component={AddPoll} />
            </Switch>
        </Router>
        )
    }
}

export default Routing;
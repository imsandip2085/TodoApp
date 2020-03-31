import React from 'react';
import Login from './Components/Login/loginForm';
import  Registation from './Components/Registation/registationForm';
import DashBoard from './Components/Dashboard/dashBoard';
import AddPoll from './Components/AddPoll/addpoll';
import UpdatePoll from './Components/UpdatePoll/UpdatePoll'
import { BrowserRouter as Router,HashRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';


class Routing extends React.Component{
    render(){
        return(
            <HashRouter>
            <Switch>
                <PublicRoute exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/registation" component={Registation} />
                <PrivateRoute exact path="/updatepoll" component={UpdatePoll} />
                <PrivateRoute path='/updatepoll/addpoll' component={AddPoll} />
                <PrivateRoute path='/dashboard' component={DashBoard} />
            </Switch>
        </HashRouter>
        )
    }
}

export default Routing;
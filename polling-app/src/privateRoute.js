import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from './Components/Login/loginForm';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('token') ?
                <Component {...props}  />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;
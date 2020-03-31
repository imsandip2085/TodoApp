import React from "react";
import { Route, Redirect } from "react-router-dom";


const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        localStorage.getItem("userType") == "admin" ?
          (<Redirect to="/updatepoll" />)
          : localStorage.getItem("userType") == "Guest" ? <Redirect to="/dashboard" /> :
            <Component {...props} />
      )
      }
    />
  );
};


export default PublicRoute;

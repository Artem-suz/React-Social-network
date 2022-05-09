import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import React from 'react'

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    
    if (props.isAuth === false) {
      
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };

  let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent);

  return ConnectedRedirectComponent;
};

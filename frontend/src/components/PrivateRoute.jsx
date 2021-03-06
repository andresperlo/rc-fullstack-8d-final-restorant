import React, { Component } from 'react';
import auth from '../utils/auth'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, permissions, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/log', state: { from: props.location } }} />
  )} />
)

export default PrivateRoute;

// && auth.isAdmin(permissions)
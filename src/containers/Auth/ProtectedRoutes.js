import React from 'react';
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoutes(props) {
  const { component: Component, ...restProps } = props;
  const token = localStorage.token;
  return (
    <Route
      {...restProps}
      render={(props) => {
        return token ? <Component {...props} /> : <Redirect to="/login" />
      }}
    />
  )
}

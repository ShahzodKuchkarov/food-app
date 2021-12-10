import React from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import ProtectedRoutes from "./containers/Auth/ProtectedRoutes";
import { protectedURLs } from "./routes";
import Sidebar from "./containers/Sidebar";
import Login from "./containers/Auth/Login11";
import SignUp from "./containers/Auth/SignUp";
export default function App(props) {
  if (localStorage.token) {
    return (
      <>
        <Sidebar buttonText="Sign out" icon={false} />
        <div className="main-content">
          <Switch>
            {protectedURLs.map((item, index) => (
              <ProtectedRoutes key={index} {...item} />
            ))}
          </Switch>
        </div>
      </>
    );
  }

  return (
    <div>
      <Switch>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>
        <Route>
          <Login></Login>
        </Route>
      </Switch>
    </div>
  );
}

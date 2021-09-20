import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import ProtectedRoutes from './containers/Auth/ProtectedRoutes';
import { publicURLs, protectedURLs } from './routes';
import Sidebar from './containers/Sidebar';
import Login from './containers/Auth/Login11';
import SignUp from './containers/Auth/SignUp';
import { useState } from 'react';
export default function App(props) {
  const token = 'dsa';
  console.log(token)
  const [state, setstate] = useState(null)

  if (localStorage.token) {
    return (
      <>
        <Sidebar
          buttonText="Sign out"
          icon={false}
        />
        <div className="main-content">
          <Switch>
            {
              protectedURLs.map((item, index) => <ProtectedRoutes key={index} {...item} />)
            }
          </Switch>
        </div>
      </>
    )
  }

  return (
    <div>
      <Switch>
        <Route path='/sign-up'>
          <SignUp></SignUp>
        </Route>
        <Route >
          <Login login={() => setstate()} ></Login>
        </Route>
      </Switch>
    </div>
  )
}

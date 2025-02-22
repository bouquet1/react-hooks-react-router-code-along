import React from "react";
// Step 1. Import react-router functions
import {Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar"
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";


// Step 2. Use <Route> components to define client-side routes in our app

export default function App() {
  return (
    <div>
    <NavBar />
    <Switch>
        <Route path="/about">
        <About/>
      </Route>
        <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/">
        {/* This syntax is short for `exact={true}`! */}
        <Home />
      </Route>
    </Switch>
  </div>
  );
}
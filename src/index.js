import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";


//add basic styling for NavLinks
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightblue",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue",}}>Home</NavLink>
      <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "darkblue",}}>About</NavLink>
      <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue",}}>Login</NavLink>
      <NavLink to="/signup" exact style={linkStyles} activeStyle={{background: "darkblue",}}>SignUp</NavLink>
    </div>
  )
}

function Home() {
  return <h1>Home!</h1>
}

function About(){
  return <h1>This is my about component!</h1>
}

function Login(){
  return(
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username"
          placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" 
          placeholder="Password" />
        </div>
          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

function SignUp () {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <input type="text" name="username" placeholder="Pick a username" />
        <input type="password" name="password" placeholder="Create a password" />
      </form>
    </div>
  )
}

// Step 2. Use <Route> components to define client-side routes in our app
function App() {
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

// Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context features
ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById("root")
);

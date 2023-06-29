import React from "react";

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

export default function NavBar() {
  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue",}}>Home</NavLink>
      <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "darkblue",}}>About</NavLink>
      <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue",}}>Login</NavLink>
      <NavLink to="/signup" exact style={linkStyles} activeStyle={{background: "darkblue",}}>SignUp</NavLink>
    </div>
  )
}

import React from "react";


export default function SignUp () {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
      <div>
        <input type="text" name="username" placeholder="Pick a username" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Create a password" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Type your email" />
      </div>
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
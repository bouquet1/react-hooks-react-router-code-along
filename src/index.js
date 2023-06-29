import React from "react";
import ReactDOM from "react-dom";
import App from "./App";




// Step 2. Use <Route> components to define client-side routes in our app


// Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context features
ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById("root")
);

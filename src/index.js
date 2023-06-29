import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

// Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context features
ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById("root")
);

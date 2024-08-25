import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body_components from "./components/Body_components/SideBar/index.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Body_components} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Following from "./pages/Following";
import NoMatch from "./pages/NoMatch";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/following" component={Following} />
        <Route exact path="*" component={NoMatch} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
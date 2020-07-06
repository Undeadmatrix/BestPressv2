import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Following from "./pages/Following";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cloudinary from "cloudinary-core";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)

function App() {
  return (
    <CloudinaryContext cloudName="bestpress">
      <Router>
          <Switch>
            
              <Route exact path="/" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Post" component={Post} />
              <Route exact path="/Following" component={Following} />
              <Route exact path="*" component={NoMatch} />
            
          </Switch>
      </Router>
    </CloudinaryContext>
  );
}

export default App;
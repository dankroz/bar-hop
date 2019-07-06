import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Desktop from "./Components/Desktop/index";
// import Maps from "./Components/Map/index";
// import Map from "./Pages/maps"
// import Home from "./Pages/home"
import SignIn from './Pages/signin';

function App() {
  return (
    <>
      <div className="desktop">
        <Desktop />
      </div>
      <div className="phone">
        <Router>
          <div>
            {/* <Nav /> */}
            <Switch>
              <Route exact path="/" component={SignIn} />
              {/* <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/map" component={Location}/>
          <Route exact path="/yelp" component={Yelp} />
          <Route exact path="/" component={Location}/>
          <Route component={NoMatch} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Desktop from "./Components/Desktop/index";
import Arrived from "./Pages/arrived";
import Maps from "./Pages/maps";
import ExtraHelp from "./Pages/extrahelp";
import Signin from "./Pages/signin";
import SignUp from "./Pages/signup";
import BarDetails from "./Pages/bardetails";
import PicPage from "./Pages/picpage";
import Leaderboard from "./Pages/Leaderboard";
import NoMatch from "./Pages/NoMatch";
import Home from "./Pages/home";

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
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/map" component={Maps} />
              <Route exact path="/help" component={ExtraHelp} />
              <Route exact path="/arrived" component={Arrived} />
              <Route exact path="/bardetails" component={BarDetails} />
              <Route exact path="/picpage" component={PicPage} />
              <Route exact path="/leaderboard" component={Leaderboard} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

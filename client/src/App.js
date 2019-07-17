import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Desktop from "./Components/Desktop/Routes";
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
import IdentifiedPic from "./Pages/identifiedPic";

// Tying in Redux
import jwt_decode from "jwt-decode";
import setAuthToken from "./Utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/Dashboard/dashboard";




// Redux
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <>
      <div className="desktop">
        <Desktop />
      </div>
      <div className="phone">
        <Router>
          <div>
            <Provider store={store}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth/google/callback" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/map" component={Maps} />
                <Route exact path="/help" component={ExtraHelp} />
                <Route exact path="/arrived" component={Arrived} />
                <Route exact path="/bardetails" component={BarDetails} />
                <Route exact path="/picpage" component={PicPage} />
                <Route exact path="/identified" component={IdentifiedPic} />
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route component={NoMatch} />
                {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
              </Switch>
            </Provider>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

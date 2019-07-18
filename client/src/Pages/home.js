import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
import Opener from "../Components/Home/index"
import { logoutUser } from "../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SettingsBtn from "../Components/Home/settingsBtn";
import LogoutModal from "../Components/Home/logoutModal";


class Home extends Component {
  state = {

    redirect: false,
    redirect1: false,
    logoutGear:false
  };
  
  
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/map" />;
    }
  };

  componentDidMount() {
    this.props.parentMethod();
    };

  onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
      this.setRedirect1()
      
  };
  setRedirect1 = () => {
    this.setState({
      redirect1: true
    });
    
  };
  renderRedirect1 = () => {
    if (this.state.redirect1) {
      return <Redirect to="/signin" />;
    }
  };
  logOut = () => {
    this.setState({logoutGear: true}) 
  }
  changeGear = () => {
    this.setState({logoutGear: false})
  }

  render() {
    return (
        <div>
        <SettingsBtn onClick={this.logOut}/>
        {this.state.logoutGear === true && (<LogoutModal changeGear={this.changeGear} onClick={this.onLogoutClick}/>)}
        {this.props.ready === true && <Opener>
            Find a New Bar!
            <p className="d-flex justify-content-center mt-4"style={{margintop: "30px", fontSize: 16, color: "#0A2463"}}>
            Click the Button below to play a new route
            </p>
        </Opener>}
        
        {this.renderRedirect()}
        <Button onClick={this.setRedirect}>
        Start Bar Hop
        </Button>
        <div className="container txt-alignment">
            {this.renderRedirect1()} 
            {/* <p  className="bottomText pt-2" style={{ fontSize: 12, color: "#0A2463", fontStyle: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.241)"}}><u onClick={this.onLogoutClick} className="newDestinationFont">Log Out?</u></p> */}
        </div>
     </div>
    );
  }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);


// export default Home;
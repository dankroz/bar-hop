import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button";
import Opener from "../Components/Home/index";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../Utils/API";
import Axios from "axios";
// import SmallBtn from "../Components/Button/SmallBtn";
import SignInBtn from "../Components/Button/SignInBtn";
// import Axios from "axios";


class Arrived extends Component {
  state = {
    redirect: false,
    userscore: 0,
    user: {}
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/bardetails" />;
    }
  };

  loadUser = () => {
    const id = this.props.auth.user.id
    console.log(id)
    API.getUser(id)
      .then(res => this.setState({userscore: (res.data.highscore + 100)}))
      // .then(this.setState({ highscore: (this.props.auth.user.highscore + 88) }))
  }

  componentDidMount() {
    this.loadUser();
  }

  updateHighScore = () => {
    const id = this.props.auth.user.id
    console.log(id);
    console.log(this.state.userscore);
    const newHighScore = {
      "highscore": this.state.userscore
    }
    console.log(newHighScore)
    Axios.put("http://localhost:3001/api/users/" + id, newHighScore)
    .then(Axios.get("http://localhost:3001/api/users/" + id)
      .then(res => console.log("updated: " + res.data.highscore))
    )
  }


  render() {
    return (
      <>
        <Opener>
          <p
            className="d-flex justify-content-center mt-4"
            style={{ margintop: "30px", fontSize: 16, color: "#0A2463" }}
          >
            You've Arrived!
          </p>
          {this.props.closestBar.name}
          <p
            className="d-flex justify-content-center mt-4"
            style={{
              margintop: "30px",
              fontSize: 16,
              color: "#0A2463",
              opacity: ".3"
            }}
          >
            You get 100 Points!!
            <br></br>
            <br></br>
            Total: {this.state.userscore} Points 
          </p>
        </Opener>
        <div>
          {this.renderRedirect()}
          <Button onClick={this.setRedirect}>Next</Button>
          
          <SignInBtn onClick={this.updateHighScore}>Check your Score</SignInBtn>
        </div>
      </>
    );
  }
}

Arrived.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(Arrived);
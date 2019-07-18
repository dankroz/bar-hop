import React, { Component } from "react";
import SmallBtn from "../Components/Button/SmallBtn";
import Jumbotron from "../Components/Jumbotron/index";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
import API from "../Utils/API";
import Axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { generateKeyPair } from "crypto";

const background = {
  backgroundColor: "#0A2463",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh"
};

class ExtraHelp extends Component {
    state = {
        redirect: false,
        addHint: false,
        userscore: 0
      };
      addHint = () => {
        this.setState({addHint: true})
        // updateHighScore = () => {
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
        // }
      }
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

      loadUser = () => {
        const id = this.props.auth.user.id
        console.log(id)
        API.getUser(id)
          .then(res => this.setState({userscore: (res.data.highscore - 25)}))
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
      <div style={background}>
        <div className="title">
          <h1 style={{ color: "white" }}>Extra Help</h1>
        </div>
        <SmallBtn onClick={this.setRedirect}>X</SmallBtn>
        >
        {this.state.addHint === true && (<Jumbotron>{this.props.closestBar.hint2}</Jumbotron>)}
        <div>
            {this.renderRedirect()}
          <Button onClick={this.addHint}>
            Add Hint
            <p style={{ marginBottom: "0px", fontSize: 8, color: "#404040" }}>
              -10pts
            </p>
          </Button>
        </div>
      </div>
    );
  }
}

ExtraHelp.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(ExtraHelp);

import React, { Component } from "react";
import Button from "../Components/Button";
// import { generateKeyPair } from "crypto";
import Opener from "../Components/Home/index";
import API from "../Utils/API";
import Axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const background = {
    backgroundColor: "#0A2463",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh"
}

class IdentifiedPic extends Component {
    state = {
        userscore: 0,
        redirect: false
    }
    clicked = () => {
        return this.props.history.push("/picpage");
    }

    loadUser = () => {
        const id = this.props.auth.user.id
        console.log(id)
        API.getUser(id)
          .then(res => this.setState({userscore: (res.data.highscore + 50)}))
          // .then(this.setState({ highscore: (this.props.auth.user.highscore + 88) }))
      }
    
      componentDidMount() {
        this.loadUser();
        
      }

      componentDidUpdate() {
          this.updateHighScore();
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


  setRedirect = () => {
    this.setState({
      redirect: true
    });
    this.props.parentMethod1()
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/picpage" />;
    }
  };



    render() {
        return (
            <>
            <div style={background}>
            <Opener>
            <p className="d-flex justify-content-center mt-4"style={{fontSize: 20, color: "white", fontWeight: "bold"}}>
            IT'S A MATCH!<span  role="img" aria-label="beer">🍻</span>
            </p>
            You took a picture of a {this.props.word}
            <p className="d-flex justify-content-center mt-4"style={{fontSize: 16, color: "white", opacity: ".3"}}>
            + 50 POINTS
            </p>
            </Opener>
            {this.renderRedirect()}
            <Button onClick={this.setRedirect}>
            Next Challenge
            </Button>
            </div>
          
            </>
        )
    }

}

IdentifiedPic.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(IdentifiedPic);
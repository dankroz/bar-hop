import React, { Component } from "react";
import "../Components/Background/style.css";
// import Jumbotron from "../Components/Jumbotron/index"
import Button from "../Components/Button"
import { Redirect } from "react-router-dom";
import API from "../Utils/API";
import { Table, TableHeader, TableRow, TableData, TableBody } from "../Components/Table";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Leaderboard extends Component {

  state = {
    redirect: false,
    highscores: [],
    leaders: [],
    userscore: 0
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/picpage" />;
    }
  };

  componentDidMount() {
    this.loadUsers();
    setTimeout(this.getLeaders, 1000);
  }

  componentDidUpdate() {
    this.getUserScore();
  }

  getUserScore = () => {
    const id = this.props.auth.user.id
    // console.log(id)
    API.getUser(id)
      .then(res => this.setState({userscore: (res.data.highscore)}))
  }

  checkscorees = () => {
    console.log("highscores: " + this.state.highscores);
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        console.log(res.data);
        this.setState({highscores: res.data});
        console.log(this.state.highscores)
      })
  }



  getLeaders = () => {
    let players = this.state.highscores;
    console.log(players)
    
    this.setState({leaders: players.sort((player1, player2) => player2.highscore - player1.highscore)});
    console.log(this.state.leaders)
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1 style={{ color: "#0A2463" }}>Leaderboard</h1>
        </div>
        {this.state.leaders.length ? (
          <Table>
            <TableBody>
              <TableRow>
                <TableHeader>
                  Name
                </TableHeader>
                <TableHeader>
                  Score
                </TableHeader>
              </TableRow>
            {this.state.leaders.map(user => (
              <TableRow key={user._id}>
                <TableData>
                  {user.name}
                </TableData>
                <TableData>
                  {user.highscore}
                </TableData>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        ) : (
          <h3>No Results to Display</h3>
        )}

        <h3 className="text-center">Here's your current score: {this.props.auth.user.name}</h3>
        <h4 className="text-center">{this.state.userscore}</h4>

        {this.renderRedirect()}
        <Button onClick={this.setRedirect}>
          Back
        </Button>
      </div>
    )
  }

}

Leaderboard.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(Leaderboard);
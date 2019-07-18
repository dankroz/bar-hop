import React, { Component } from "react";
import "../Components/Background/style.css";
// import Jumbotron from "../Components/Jumbotron/index"
import Button from "../Components/Button"
import { Redirect } from "react-router-dom";
import API from "../Utils/API";
import { Table, TableHeader, TableRow, TableData, TableBody } from "../Components/Table";



class Leaderboard extends Component {

  state = {
    redirect: false,
    highscores: []
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
    
    let leaders = (players.sort((player1, player2) => player2.highscore - player1.highscore));
    console.log(leaders)
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1 style={{ color: "#0A2463" }}>Leaderboard</h1>
        </div>
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
            <TableRow>
              <TableData>
                  lkjlkjlk  
              </TableData>
              <TableData>
                  dflkdflk
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
        {this.renderRedirect()}
        <Button onClick={this.setRedirect}>
          Back
                </Button>
      </div>
    )
  }

}

export default Leaderboard;
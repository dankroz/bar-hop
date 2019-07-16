import React, { Component } from "react";
import "../Components/Background/style.css";
import Jumbotron from "../Components/Jumbotron/index"
import Button from "../Components/Button"



class Leaderboard extends Component {

    render() {
        return (
            <div>
                <div className="title">
                    <h1 style={{color: "#0A2463"}}>Leaderboard</h1>
                </div>
                <Jumbotron/>
                <Button>
                    Next
                </Button>
            </div>
        )
    }

}

export default Leaderboard;
import React, { Component } from "react";
import Webcam from "react-webcam";
import "../Components/Nav/style.css"
// import Button from "../Components/Button"
import Clarifai from "clarifai"
import { withRouter } from 'react-router-dom'
import { Redirect } from "react-router-dom";
import hop from "../Components/Nav/hop.png";
import trophy from "../Components/Nav/trophy.png";
import play from "../Components/Nav/play.png";

const buttonBackground = {
  backgroundColor: "#0A2463",
  color: "white",
  borderRadius: 30
};

// const Clarifai = require('clarifai');
// const Button = withRouter(({ history }) => (
//     <Buttoner type='button' 
//     onClick={()=> { history.push('/map')}}>
//     Take Picture
//     </Buttoner>
//   ))
class PicPage extends Component {
  state = {
    redirect1: false,
    redirect2: false,
    redirect3: false,
    
  };
  
  

  // randomWords = () => {
  // var choiceIndex = Math.floor(Math.random() * this.state.array.length)
  // this.setState({word: this.state.array[choiceIndex]})
  // console.log(this.state.word)
  
  // };
  
  

  
  
  
  setRedirect1 = () => {
    this.setState({
      redirect1: true
    });
  };
  renderRedirect1 = () => {
    if (this.state.redirect1) {
      return <Redirect to="/home" />;
    }
  };
  
  setRedirect2 = () => {
    this.setState({
      redirect2: true
    });
  };
  renderRedirect2 = () => {
    if (this.state.redirect2) {
      return <Redirect to="/leaderboard" />;
    }
  };

  setRedirect3 = () => {
    this.setState({
      redirect3: true
    });
  };
  renderRedirect3 = () => {
    if (this.state.redirect3) {
      return <Redirect to="/bardetails" />;
    }
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    const images = (imageSrc.split("data:image/jpeg;base64,").pop());
    console.log(imageSrc);
   
    const app = new Clarifai.App({
      apiKey:'743f28aef09047d6aa5ef398f0c67f61'
    });
    app.workflow.predict("Bar-Hop-Workflow", {base64: images})
    .then(response => {
        const initial = response.results[0].outputs[0].data.concepts
        const additions = response.results[0].outputs[1].data.concepts
        const barItems = initial.concat(additions)
        // const correct = [barItems[0]].concat(barItems[1],barItems[2],barItems[3],barItems[4],barItems[5],barItems[6],barItems[20],barItems[21],barItems[22],barItems[23],barItems[24],barItems[25])
        console.log(barItems)
        console.log("item.value")
        for (let i = 0; i < barItems.length; i++) {
          const item = barItems[i];
          if (item.value > .8 && item.value < 1 && (/^(water\ssports|beer|bar\stap|juke\sbox|neon|shot\sglass|jersey|wine|shotski|tv|television)$/.test(item.name))) {
            console.log("did this work")
            console.log(item.name);
            this.props.parentMethod1();
            return  this.props.history.push("/identified");
          } else {
            console.log("you failed at " + item.name)
            this.props.history.push("/error");
          }
        };
      })
    .catch(err => console.log(err));
  // app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
  //     .then(generalModel => {
  //       return generalModel.predict("https://i.kinja-img.com/gawker-media/image/upload/s--vHt6tbFa--/c_scale,f_auto,fl_progressive,q_80,w_800/xjmx1csashjww8j8jwyh.jpg");
  //     })
  //     .then(response => {
  //       var concepts = response['outputs'][0]['data']['concepts']
  //       console.log(concepts)
  //     })
  };

  render() {
    const videoConstraints = {
      width: 750,
      height: 1500,
      facingMode: "environment"
    };

    return (
      <div>
        <Webcam
          className="webcam"
          audio={false}
          // height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          // width={355}
          videoConstraints={videoConstraints}
        />
        <div className="text-center mx-auto">
          <div className="panel panel-primary m-5" style={{ fontSize: 27, color: "white", opacity: "1", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.247)" }}>Find a {this.props.word} at the bar. Take a picture for +50 points</div>
        </div>
        <div> 
        <div className="text-center">
          <button className="btn" style={buttonBackground} onClick={this.capture}>Take Picture <span  role="img" aria-label="photo">📸</span></button>
        </div>
          {/* {this.renderRedirect()}
          <Button onClick={this.setRedirect1}>Go To Next Bar</Button> */}
          <div className="container-bar container-fluid">
            <div className="row specialClass">
               
            {this.renderRedirect2()}
              <button onClick={this.setRedirect2} className="col-md-3 smallBox">
              <img className="navIcons" src={trophy} alt={"trophy"} />
              <p className="text-center text-dark mt-1" style={{ fontSize: 10, color: "#0A2463", opacity: .7, fontWeight: "bold"}}> Leaderboard</p>
              </button>
               
              {this.renderRedirect3()}
              <button onClick={this.setRedirect3} className="col-md-3 smallBox frontBox">
              <img className="navIcons" src={hop} alt={"hop"} />
              <p className="text-center text-dark mt-1" style={{ fontSize: 10, color: "#0A2463", opacity: .7, fontWeight: "bold"}}> Bar Details</p>
              </button>
              
              {this.renderRedirect1()}
              <button  onClick={this.setRedirect1} className="col-md-3 smallBox">
              <img className="playBtn" src={play} alt={"play"} />
              <p className="text-center text-dark mt-1" style={{ fontSize: 10, color: "#0A2463", opacity: .7, fontWeight: "bold"}}> Next Bar</p>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(PicPage);
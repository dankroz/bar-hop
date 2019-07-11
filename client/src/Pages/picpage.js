import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "../Components/Button"
import Clarifai from "clarifai"

// const Clarifai = require('clarifai');

class PicPage extends Component {
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
    app.models.predict(Clarifai.GENERAL_MODEL, {base64: images})
    .then(response => {
        var concepts = response['outputs']
        console.log(concepts)
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
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <Button onClick={this.capture}>Take Picture</Button>
      </div>
    );
  }

}

export default PicPage;
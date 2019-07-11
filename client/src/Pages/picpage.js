import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "../Components/Button"

const Clarifai = require('clarifai');

class PicPage extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
    const app = new Clarifai.App({
      apiKey: '5a4ffb2543794736a379cdf464a467d4'
    });

    app.models.predict(Clarifai.GENERAL_MODEL, {base64: imageSrc})
    .then(response => {
        // var concepts = response['outputs'][0]['data']['concepts']
        console.log(response.outputs[0].data)
      })
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
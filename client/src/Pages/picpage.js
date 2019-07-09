import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "../Components/Button"


class PicPage extends Component {
    setRef = webcam => {
        this.webcam = webcam;
      };
     
      capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
      };
     
      render() {
        const videoConstraints = {
          width: 1280,
          height: 720,
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
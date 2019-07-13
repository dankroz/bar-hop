import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "../Components/Button"
import Clarifai from "clarifai"
import { withRouter } from 'react-router-dom'

// const Clarifai = require('clarifai');
// const Button = withRouter(({ history }) => (
//     <Buttoner type='button' 
//     onClick={()=> { history.push('/map')}}>
//     Take Picture
//     </Buttoner>
//   ))
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
          if (item.value > .8 && item.value < 1 && (/^(water\ssports|beer|bar\stap|juke\sbox|neon|shot\sglass|jersey|wine|shotski|tv)$/.test(item.name))) {
            console.log("did this work")
            console.log(item.name);
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
        <Button onClick={this.capture}>Take Picture</Button>
      </div>
    );
  }

}

export default withRouter(PicPage);
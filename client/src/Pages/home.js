import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
// import API from "../Utils/API"
//import ShopContext from "../context/shop-context"

const background = {
  backgroundColor: "#0A2463",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh"
};

class Home extends Component {
  state = {
    redirect: false
  };
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

  // state = {
  //     bars: [],
  //     Userlong: "",
  //     Userlat: "",
  //     closest: "",

  //   };

  // componentDidMount() {

  //     this.loadBars();
  //     this.getLocation();

  //   };

  // getLocation = () => {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //         console.log("hello")
  //         console.log(position.coords.latitude, position.coords.longitude);
  //       })
  // };

  //     loadBars = () => {
  //         API.getBars()
  //           .then(res => this.setState({ bars: res.data }))
  //           .catch(err => console.log(err));
  //         console.log(this.state.bars);
  //         // console.log(this.getLocation())
  //         //this.Loading();
  //       };

  //     loadBars1 = () => {
  //         API.getBars()
  //           .then(res => this.setState({ bars: res.data }))
  //           .catch(err => console.log(err));
  //         console.log(this.state.bars);
  //         // console.log(this.getLocation())
  //         this.Loading();
  //         //return  this.props.history.push("/map")
  //       };

  //     Loading = () => {
  //         // HTML5/W3C Geolocation
  //         if (navigator.geolocation) {
  //           navigator.geolocation.getCurrentPosition(this.UserLocation);
  //         }
  //         // Default to Washington, DC
  //         else
  //           console.log("No Geolocation")
  //       }

  //     UserLocation = (position)  => {
  //         this.NearestCity(position.coords.latitude, position.coords.longitude);

  //         this.setState({Userlat: position.coords.latitude });
  //         this.setState({Userlong: position.coords.longitude })

  //         console.log("Lat:" + this.state.Userlat + ", Long:" + this.state.Userlong);
  //       }

  //     NearestCity = (latitude, longitude) => {

  //         var minDif = 99999;
  //         var closest;

  //         for (var index = 0; index < this.state.bars.length; ++index) {
  //           var dif = this.PythagorasEquirectangular(latitude, longitude, this.state.bars[index].latitude, this.state.bars[index].longtitude);
  //             console.log("Facts: " + this.state.bars[index].latitude, this.state.bars[index].longtitude)
  //           if (dif < minDif) {
  //             closest = index;
  //             minDif = dif;
  //           }
  //         }
  //         console.log("asdaf: " + closest);
  //         this.setState({closest: closest });
  //         console.log(this.state.bars[closest]);
  //         //this.setState({closestBar:this.state.bars[closest]});
  //         console.log("The Closest bar to our location is " + this.state.closestBar.name);
  //         //this.clicked()
  // }

  //     PythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
  //         lat1 = this.Deg2Rad(lat1);
  //         lat2 = this.Deg2Rad(lat2);
  //         lon1 = this.Deg2Rad(lon1);
  //         lon2 = this.Deg2Rad(lon2);
  //         var R = 6371; // km
  //         var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  //         var y = (lat2 - lat1);
  //         var d = Math.sqrt(x * x + y * y) * R;
  //         return d;
  //       }

  //       Deg2Rad = (deg) => {
  //         return deg * Math.PI / 180;
  //       }

  //       sendData = () => {
  //         this.props.parentCallback("Hey Popsie, How’s it going?");
  //    };

//   clicked = () => {
//     return this.history.pushState(null, "/map");

//     //this.props.history.push("/map");
//   };

  render() {
    return (
      <div style={background}>
        <p>{this.props.closestBar.name}</p>
        <div>
            {this.renderRedirect()}
          <Button
            onClick={this.setRedirect}
            // onClick={this.context.addProductToCart(this.state.closestBar)}
          >
            Start Bar Hop
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
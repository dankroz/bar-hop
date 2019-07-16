import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Desktop from "./Components/Desktop/Routes";
import Arrived from "./Pages/arrived";
import Maps from "./Pages/maps";
import ExtraHelp from "./Pages/extrahelp";
import Signin from "./Pages/signin";
import SignUp from "./Pages/signup";
import BarDetails from "./Pages/bardetails";
import PicPage from "./Pages/picpage";
import Leaderboard from "./Pages/Leaderboard";
import NoMatch from "./Pages/NoMatch";
import Home from "./Pages/home";
import IdentifiedPic from "./Pages/identifiedPic";
//import API from "./Utils/API"
//import ShopContext from "./context/shop-context";

class App extends Component {
  state = {
    bars: [{
      name: "Misconduct Tavern",
      latitude: 39.948580,
      longtitude: -75.166650,
      type: "Sports Bar",
      hint1: "This bars name is a synonym for mischievous actions or unacceptable behavior",
      hint2: "This bar is located on a street named after the a type of grasshopper with exceptional musical talent",
      image: "https://www.airbnb.com/google_place_photo?photoreference=CmRaAAAAbkRcnIFezWxOw-e0OdkZ1xubuhE9aZucJfQi5GLtKTFBrnfVDUKZhn4tr7PjwY31FwlcsK9ddrbIAbPM-W0W8XvGyJ9kW2FHuNrT8e6PcLGTTGPH9k3UcJqI7nWWoNe8EhA2pSNDddf6AupLFfmkT5ROGhR2YpVt21WH6ETUTdCTX6vINEnZ9w&maxwidth=1000&maxheight=1000&place_id=85040"
    },
    {
      name: "Prohibition",
      latitude: 39.961460,
      longtitude: -75.159321,
      type: "Taproom",
      hint1: "This bar name represents a time in history where shots weren't so easy to come by",
      hint2: "The name of this taproom is also a synonym for forbidding something, especially by law",
      image: "https://otg.imgix.net/assets/grid/philadelphia/chinatown-the-loft-district/prohibition-taproom/DSCF1569.JPG?auto=format%2Ccompress&crop=focalpoint&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=80&w=1200&s=a52ea15fcf561bada53ed0c59379ba45"
    },
    {
      name: "Tipsy Bistro",
      latitude: 39.952488,
      longtitude: -75.187602,
      type: "Pub",
      hint1: "This bars name is similar to the feeling after finishing your third shot",
      hint2: "The location of this bistro is a block away from one of the city's best spots for live music",
      image: "https://www.phillymag.com/wp-content/uploads/sites/3/2018/03/tipsy-bistro-exterior-Facebook-900x600.jpg"
    },
    {
      name: "The Franklin Bar",
      latitude: 39.951659,
      longtitude: -75.170411,
      type: "Speakeasy",
      hint1: "The bar is named after a founding father who made his key discovery using a kite",
      hint2: "This speakeasy has a name that is synonymous with a local Philly museaum",
      image: "https://cdn.vox-cdn.com/thumbor/3Whiy5GiA-zisnM2Yah4neYwjjM=/11x0:736x544/1200x800/filters:focal(11x0:736x544)/cdn.vox-cdn.com/uploads/chorus_image/image/50209745/1932362_109871969373282_3251139940362004347_n.0.0.jpg"
    },
    {
      name: "Pennovation",
      latitude: 39.940689,
      longtitude: -75.198807,
      type: "School",
      hint1: "This bar is not a bar",
      hint2: "The name of this taproom is also a synonym for forbidding something, especially by law",
      image: "https://otg.imgix.net/assets/grid/philadelphia/chinatown-the-loft-district/prohibition-taproom/DSCF1569.JPG?auto=format%2Ccompress&crop=focalpoint&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=80&w=1200&s=a52ea15fcf561bada53ed0c59379ba45"
    }
  ],
    Userlong: "",
    Userlat: "",
    closest: "",
    closestBar: "",
    ready:"false"
  }

  componentDidMount() {
    this.Loading();     
  };

//   getLocation = () => { 
//     navigator.geolocation.getCurrentPosition(function(position) {
//         console.log("hello")
//         console.log(position.coords.latitude, position.coords.longitude);   
//       })
//   };

//   loadBars = () => {
//     API.getBars()
//       .then(res => this.setState({ bars: res.data }))
//       .catch(err => console.log(err));
//     console.log(this.state.bars);
//     // console.log(this.getLocation())
//     this.loadBars1();
//   };

// loadBars1 = () => {
//     API.getBars()
//       .then(res => this.setState({ bars: res.data }))
//       .catch(err => console.log(err));
//     console.log(this.state.bars);
//     // console.log(this.getLocation())
//     this.Loading();
//     //return  this.props.history.push("/map")
//   };


Loading = () => {
    // HTML5/W3C Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.UserLocation);     
    }      
    // Default to Washington, DC
    else
      console.log("No Geolocation")
  }

UserLocation = (position)  => {
    this.NearestCity(position.coords.latitude, position.coords.longitude);
    
    this.setState({Userlat: position.coords.latitude });
    this.setState({Userlong: position.coords.longitude })
  
    console.log("Lat:" + this.state.Userlat + ", Long:" + this.state.Userlong);
  }


NearestCity = (latitude, longitude) => {
    
    var minDif = 99999;
    var closest;
    
    for (var index = 0; index < this.state.bars.length; ++index) {
      var dif = this.PythagorasEquirectangular(latitude, longitude, this.state.bars[index].latitude, this.state.bars[index].longtitude);
        console.log("Facts: " + this.state.bars[index].latitude, this.state.bars[index].longtitude)
      if (dif < minDif) {
        closest = index;
        minDif = dif;
      }
    }
    console.log("asdaf: " + closest);
    this.setState({closest: closest });
    console.log(this.state.bars[closest]);
    this.setState({closestBar:this.state.bars[closest]});
    console.log("The Closest bar to our location is " + this.state.closestBar.name);
    this.setState({
      ready: true
    });
}

PythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
    lat1 = this.Deg2Rad(lat1);
    lat2 = this.Deg2Rad(lat2);
    lon1 = this.Deg2Rad(lon1);
    lon2 = this.Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    var y = (lat2 - lat1);
    var d = Math.sqrt(x * x + y * y) * R;
    return d;
  }

  Deg2Rad = (deg) => {
    return deg * Math.PI / 180;
  }

  render(){ 
  return (
    <>
      <div className="desktop">
        <Desktop />
      </div>
      <div className="phone">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={()=> <Home closestBar={this.state.closestBar} ready={this.state.ready} />} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/map" render={()=> <Maps closestBar={this.state.closestBar} Userlong={this.state.Userlong} Userlat={this.state.Userlat}/>}/>
              <Route exact path="/help" render={()=> <ExtraHelp closestBar={this.state.closestBar} />} />
              <Route exact path="/arrived" render={()=> <Arrived closestBar={this.state.closestBar} />} />
              <Route exact path="/bardetails" render={()=> <BarDetails closestBar={this.state.closestBar} />} />
              <Route exact path="/picpage" component={PicPage} />
              <Route exact path="/identified" component={IdentifiedPic} />
              <Route exact path="/leaderboard" component={Leaderboard} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>    
    </>
  );
  }
}

export default App;

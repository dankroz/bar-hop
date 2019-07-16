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
        name: "Pennovation",
        latitude: 39.9414993,
        longtitude: -75.2016702,
        type: "School",
        hint1: "This bar is not a bar ",
        hint2: "This bar which is not a bar is located on Penn's campus",
        image: "https://cdn.vox-cdn.com/thumbor/njfZKmII6kl20ucd2SsicIlHUDQ=/317x861:5760x3840/1200x800/filters:focal(2420x1460:3340x2380)/cdn.vox-cdn.com/uploads/chorus_image/image/52950799/1635_06.0.jpg",
        street:"3401 Grays Ferry Ave",
        cityZip:"Philadelphia, PA 19146",
      googleMaps:"https://www.google.com/maps/dir//Pennovation+Center,+3401+Grays+Ferry+Ave,+Philadelphia,+PA+19146/@39.9414993,-75.2016702,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c6604b976e85:0xf1832c05f0e57070!2m2!1d-75.1994815!2d39.9414993",
      hours: "M 12am T 12am W 12am Th 12am F 12am S 12am Su 12am",
      rating:"4.4",
      yelp: "https://www.yelp.com/biz/pennovation-center-philadelphia?osq=pennovation"
      },
      {
      name: "Misconduct Tavern",
      latitude: 39.948580,
      longtitude: -75.166650,
      type: "Sports Bar",
      hint1: "This bars name is a synonym for mischievous actions or unacceptable behavior",
      hint2: "This bar is located on a street named after the a type of grasshopper with exceptional musical talent",
      image: "https://www.airbnb.com/google_place_photo?photoreference=CmRaAAAAbkRcnIFezWxOw-e0OdkZ1xubuhE9aZucJfQi5GLtKTFBrnfVDUKZhn4tr7PjwY31FwlcsK9ddrbIAbPM-W0W8XvGyJ9kW2FHuNrT8e6PcLGTTGPH9k3UcJqI7nWWoNe8EhA2pSNDddf6AupLFfmkT5ROGhR2YpVt21WH6ETUTdCTX6vINEnZ9w&maxwidth=1000&maxheight=1000&place_id=85040",
      street:"1511 Locust St",
      cityZip:"Philadelphia, PA 19102",
      googleMaps:"https://www.google.com/maps/dir/40.0039936,-75.3983488/misconduct+tavern/@39.9693297,-75.4156786,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c6c63ab14c32d5:0x36f96bed748075ca!2m2!1d-75.1666436!2d39.9485895",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"3.5",
      yelp: "https://www.yelp.com/biz/misconduct-tavern-philadelphia"
    },
    {
      name: "Prohibition",
      latitude: 39.961460,
      longtitude: -75.159321,
      type: "Taproom",
      hint1: "This bar name represents a time in history where shots weren't so easy to come by",
      hint2: "The name of this taproom is also a synonym for forbidding something, especially by law",
      image: "https://otg.imgix.net/assets/grid/philadelphia/chinatown-the-loft-district/prohibition-taproom/DSCF1569.JPG?auto=format%2Ccompress&crop=focalpoint&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=80&w=1200&s=a52ea15fcf561bada53ed0c59379ba45",
      street:"501 N 13th St",
      cityZip:"Philadelphia, PA 19123",
      googleMaps:"https://www.google.com/maps/dir//Prohibition+Taproom,+501+N+13th+St,+Philadelphia,+PA+19123/@39.961304,-75.1614987,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c7d461881b75:0x81854e6dd8a79134!2m2!1d-75.15931!2d39.961304",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"4.0",
      yelp: "https://www.yelp.com/biz/prohibition-taproom-philadelphia?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"

    },
    {
      name: "Tipsy Bistro",
      latitude: 39.952488,
      longtitude: -75.187602,
      type: "Pub",
      hint1: "This bars name is similar to the feeling after finishing your third shot",
      hint2: "The location of this bistro is a block away from one of the city's best spots for live music",
      image: "https://www.phillymag.com/wp-content/uploads/sites/3/2018/03/tipsy-bistro-exterior-Facebook-900x600.jpg",
      street:"3131 Walnut St",
      cityZip:"Philadelphia, PA 19104",
      googleMaps:"https://www.google.com/maps/dir//Tipsy+Bistro,+3131+Walnut+St,+Philadelphia,+PA+19104/@39.952365,-75.1897263,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c72bc0cb8a83:0xbfddbd2981d770b0!2m2!1d-75.1875376!2d39.952365",
      hours: "M 12am T 2am W 2am Th 2am F 2am S 12am Su 12am",
      rating:"4.5",
      yelp: "https://www.yelp.com/biz/tipsy-bistro-philadelphia?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
      name: "The Franklin Bar",
      latitude: 39.951659,
      longtitude: -75.170411,
      type: "Speakeasy",
      hint1: "The bar is named after a founding father who made his key discovery using a kite",
      hint2: "This speakeasy has a name that is synonymous with a local Philly museaum",
      image: "https://cdn.vox-cdn.com/thumbor/3Whiy5GiA-zisnM2Yah4neYwjjM=/11x0:736x544/1200x800/filters:focal(11x0:736x544)/cdn.vox-cdn.com/uploads/chorus_image/image/50209745/1932362_109871969373282_3251139940362004347_n.0.0.jpg",
      street:"112 S 18th St",
      cityZip:"Philadelphia, PA 19103",
      googleMaps:"https://www.google.com/maps/dir//The+Franklin+Bar,+112+S+18th+St,+Philadelphia,+PA+19103/@39.9512933,-75.1727317,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c63095130697:0x3685c5d5580f1ef2!2m2!1d-75.170543!2d39.9512933",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"4.0",
      yelp: "https://www.yelp.com/biz/the-franklin-mortgage-and-investment-company-philadelphia-2?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
      name: "a.bar",
      latitude: 39.950539,
      longtitude: -75.170582,
      type: "Cocktail Bar",
      hint1: "This is a bar",
      hint2: "The title of this bar starts with a single vowel",
      image: "https://www.uwishunu.com/wp-content/uploads/2013/07/ABar_2013-02-M.Edlow-680uw.jpg",
      street:"1737 Walnut St",
      cityZip:"Philadelphia, PA 19103",
      googleMaps:"https://www.google.com/maps/dir//a.bar,+1737+Walnut+St,+Philadelphia,+PA+19103/@39.9497058,-75.173342,16.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c6309ff03e0f:0xf9a2670097d679bf!2m2!1d-75.1705355!2d39.9502046",
      hours: "M 1am T 1am W 1am Th 1am F 2am S 2am Su 10pm",
      rating:"3.5",
      yelp: "https://www.yelp.com/biz/a-bar-philadelphia?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
      name: "The Bards Irish Bar",
      latitude: 39.9507451,
      longtitude: -75.176391,
      type: "Bar & Pub",
      hint1: "The irish owner may or may not have a beard, but he's only one vowel short",
      hint2: "This bar is known for giving guests a real taste of Ireland",
      image: "http://www.bardsirishbar.com/images/thebards_exterior.jpg",
      street:"2013 Walnut St",
      cityZip:"Philadelphia, PA 19103",
      googleMaps:"https://www.google.com/maps/dir//The+Bards+Irish+Bar,+2013+Walnut+St,+Philadelphia,+PA+19103/@39.9507451,-75.176391,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c639d7fcd4eb:0x954b4bef07f358a2!2m2!1d-75.1742023!2d39.9507451",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"3.5",
      yelp: "https://www.yelp.com/biz/the-bards-philadelphia?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
      name: "Good Dog Bar",
      latitude: 39.9493537,
      longtitude: -75.170245,
      type: "Bar & Restaurant",
      hint1: "This bar is well known for their canine friendly atmosphere",
      hint2: "The bar encourages guests to come, sit, and stay for some tasty treats or craft beer",
      image: "https://zagat-photos.imgix.net/ChIJPzXhsjrGxokRfz0Y3386McU/d24bf8a11424717de48af086dc26992d.jpg?fit=crop&crop=center&max-w=384&max-h=384&auto=format",
      street:"224 S 15th St",
      cityZip:"Philadelphia, PA 19102",
      googleMaps:"https://www.google.com/maps/dir//Good+Dog+Bar,+224+S+15th+St,+Philadelphia,+PA+19102/@39.9493537,-75.170245,17.09z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c63ab2e1353f:0xc5313a7fdf183d7f!2m2!1d-75.1662304!2d39.9487759",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"4.0",
      yelp: "https://www.yelp.com/biz/good-dog-bar-philadelphia?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
      name: "Howl at the Moon",
      latitude: 39.9479639,
      longtitude: -75.1671929,
      type: "Bar",
      hint1: "This bar encourages people to yell into space",
      hint2: "The bars symbol is synonymous with a warewolf",
      image: "https://www.visitpittsburgh.com/imager/files_idssasp_com/public/C32/0603d240-7bb4-4f26-8659-cfb449095dc1/f716462d-8818-464f-964e-1d0d7a776e8c_2200f99a241e55606b0e5da9ea141a39.jpg",
      street:"258 S 15th St",
      cityZip:"Philadelphia, PA 19102",
      googleMaps:"https://www.google.com/maps/dir//Howl+at+the+Moon+Philadelphia,+258+S+15th+St,+Philadelphia,+PA+19102/@39.9479639,-75.1671929,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c63acda46e05:0xef98bfafb4981ccf!2m2!1d-75.1665446!2d39.947687",
      hours: "W 2am Th 2am F 2am S 2am",
      rating:"3.5",
      yelp: "https://www.yelp.com/biz/howl-at-the-moon-philadelphia-philadelphia?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
  ],
    Userlong: "",
    Userlat: "",
    closest: "",
    closestBar: "",
    ready:"false"
  }

  

  componentDidMount() {
    this.setState({closestBar: ""})
    this.setState({closest: ""})
    this.setState({Userlat: ""})
    this.setState({Userlong: ""})
    console.log("Closest: " + this.state.closest)
        
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
    this.removeBar()
}

removeBar = () => {
  const items = this.state.bars
  const valueToRemove = this.state.closestBar
  const filteredItems = items.filter(item => item !== valueToRemove)
  console.log(filteredItems)
  this.setState({bars: filteredItems})
  console.log(this.state.bars)
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
              <Route exact path="/" render={()=> <Home parentMethod={this.Loading} closestBar={this.state.closestBar} ready={this.state.ready} bars={this.state.bars}/>} />
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

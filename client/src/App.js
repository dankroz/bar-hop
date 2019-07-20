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
import Welcome from "./Pages/welcome"
import NoLocation from "./Pages/nolocation";
import Error from "./Pages/404";
//import API from "./Utils/API"
//import ShopContext from "./context/shop-context";

// Tying in Redux
import jwt_decode from "jwt-decode";
import setAuthToken from "./Utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/Dashboard/dashboard";



// Redux
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}

class App extends Component {
  state = {
    bars: [{
      name: "Pennovation",
      latitude: 39.9416787,
      longtitude: -75.1994534,
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
      name: "Irish Pub",
      latitude: 39.9507451,
      longtitude: -75.176391,
      type: "Bar & Pub",
      hint1: "This bar has 2 locations on Walnut, with this one being a Wharton staple",
      hint2: "This bar is known for giving guests a real taste of Ireland",
      image: "https://lh5.googleusercontent.com/p/AF1QipMV4f7PZd3piwie3sUBtC2Ph8XId0PCeqPOA1LU=w408-h323-k-no",
      street:"2007 Walnut St",
      cityZip:"Philadelphia, PA 19103",
      googleMaps:"https://www.google.com/maps/place/Irish+Pub/@39.9508901,-75.1762207,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6c637639fd55d:0x81918074c7302c22!8m2!3d39.950886!4d-75.174032",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"3",
      yelp: "https://www.yelp.com/biz/irish-pub-philadelphia?osq=Irish+Pub"
    },
    {
      name: "Drinkers Pub",
      latitude: 39.9519395,
      longtitude: -75.1748219,
      type: "Pub",
      hint1: "This bar name describes a group of people who would go to this bar to do what the bar is named",
      hint2: "People are called this if they are in AA (Alcoholics annonymous)",
      image: "https://lh5.googleusercontent.com/p/AF1QipMV4f7PZd3piwie3sUBtC2Ph8XId0PCeqPOA1LU=w408-h323-k-no",
      street:"1903 Chestnut St",
      cityZip:"Philadelphia, PA 19103",
      googleMaps:"https://www.google.com/maps/place/Drinker's+Pub/@39.9519395,-75.1748219,17z/data=!4m12!1m6!3m5!1s0x89c6c637639fd55d:0x81918074c7302c22!2sIrish+Pub!8m2!3d39.950886!4d-75.174032!3m4!1s0x0:0x393d02d9c97a0027!8m2!3d39.9521221!4d-75.1720713",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"3.5",
      yelp: "https://www.yelp.com/biz/drinkers-pub-philadelphia?osq=Drinkers"
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
    {
      name: "Time",
      latitude: 39.9499482,
      longtitude: -75.1641009,
      type: "Jazz Bar",
      hint1: "The name of this bar can fly without wings",
      hint2: "The name of this bar is harmless... but it can kill you",
      image: "https://lh5.googleusercontent.com/p/AF1QipNP8BSYTGZBTkVpIhgkJzA4GJIuRzGCmEwp_d4=w465-h240-k-no",
      street:"1315 Sansom St",
      cityZip:"Philadelphia, PA 19107",
      googleMaps:"https://www.google.com/maps/place/Time/@39.9499482,-75.1641009,18.95z/data=!4m5!3m4!1s0x89c6c62f72041a8d:0x45e4fe1ab2b2a640!8m2!3d39.9500493!4d-75.1624957",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"4.0",
      yelp: "https://www.yelp.com/biz/time-philadelphia?osq=time+restaurant"
    },
    {
      name: "McGillin's Olde Ale House",
      latitude: 39.950177,
      longtitude: -75.1669872,
      type: "Pub",
      hint1: "Oldest continually operating pub in the city",
      hint2: "This bar opened its doors the same year when Abraham Lincoln was elected President ",
      image: "https://lh5.googleusercontent.com/p/AF1QipMctTH1ysVwdTNCg_sAakdu_kaFzNI09g98rgce=w408-h272-k-no",
      street:"1310 Drury St",
      cityZip:"Philadelphia, PA 19107",
      googleMaps:"https://www.google.com/maps/place/McGillin's+Olde+Ale+House/@39.950177,-75.1669872,16z/data=!4m5!3m4!1s0x89c6c62f729f84a1:0xbaf1bbd50d3e7a47!8m2!3d39.950177!4d-75.1626098",
      hours: "M 2am T 2am W 2am Th 2am F 2am S 2am Su 2am",
      rating:"4.0",
      yelp: "https://www.yelp.com/biz/mcgillins-olde-ale-house-philadelphia"
    },
    {
      name: "Dirty Franks",
      latitude: 39.9462784,
      longtitude: -75.1646963,
      type: "Local Watering Hole",
      hint1: "Who dropped my hotdog on the floor?",
      hint2: "This bar shares its name with a common american delight",
      image: "https://video-images.vice.com/_uncategorized/1538672866507-VICE_dirtyfranks-2.jpeg",
      street:"347 S 13th St",
      cityZip:"Philadelphia, PA 19146",
      googleMaps:"https://www.google.com/maps/dir//Dirty+Franks,+347+S+13th+St,+Philadelphia,+PA+19107/@39.9462784,-75.1646963,19z/data=!4m16!1m6!3m5!1s0x89c6c6245dce1c03:0x26f65f8548e1f772!2sDirty+Franks!8m2!3d39.9453778!4d-75.1628134!4m8!1m0!1m5!1m1!1s0x89c6c6245dce1c03:0x26f65f8548e1f772!2m2!1d-75.1628134!2d39.9453778!3e1",
      hours: "W 2am Th 2am F 2am S 2am",
      rating:"4.0",
      yelp: "https://www.yelp.com/biz/dirty-franks-philadelphia"
    },
    {
      name: "Bob and Barbara's Lounge",
      latitude: 39.9440475,
      longtitude: -75.1675479,
      type: "PBR Bar",
      hint1: "Located on one of the most famous streets in Philly, this bar serves a fine PBR",
      hint2: "On Saturday night, you can see live jazz music",
      image: "https://philly.thedrinknation.com/images/bars/1BobLounge.jpg",
      street:"1509 South St",
      cityZip:"Philadelphia, PA 19102",
      googleMaps:"https://www.google.com/maps/dir//Bob+and+Barbara's+Lounge,+1509+South+St,+Philadelphia,+PA+19146/@39.9440475,-75.1697366,17z/data=!4m16!1m6!3m5!1s0x89c6c63cbe79df8b:0x68ad69806b42bc21!2sBob+and+Barbara's+Lounge!8m2!3d39.9440475!4d-75.1675479!4m8!1m0!1m5!1m1!1s0x89c6c63cbe79df8b:0x68ad69806b42bc21!2m2!1d-75.1675479!2d39.9440475!3e1",
      hours: "W 2am Th 2am F 2am S 2am",
      rating:"4.0",
      yelp: "https://www.yelp.com/biz/bob-and-barbaras-philadelphia"
    },
    {
      name: "Standard Tap",
      latitude: 39.964165,
      longtitude: -75.140522,
      type: "Standard Taproom",
      hint1: "Great place for a post coding bootcamp graduation beer",
      hint2: "If you couldn't get the first hint, lord help ya",
      image: "https://lh5.googleusercontent.com/p/AF1QipP5GAJTKL-fGB9Z3nQOv4LK-8oOPjYBDWUqHOG1=w408-h306-k-no",
      street:"901 N 2nd St",
      cityZip:"Philadelphia, PA 19123",
      googleMaps:"https://google.com/maps/place/Standard+Tap/@39.9641636,-75.1427099,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6c86504bc8ecb:0xaead2659f4e312e6!8m2!3d39.9641636!4d-75.1405212",
      hours: "Mon-Fri 11am-2am",
      rating:"4.5",
      yelp: "https://www.yelp.com/biz/standard-tap-philadelphia"
    }, 
    {
      name: "Ortlieb's",
      latitude: 39.9634646,
      longtitude: -75.1437828,
      type: "bar",
      hint1: "This divey watering hole used to be a staple brewery in Philly",
      hint2: "Catch local bands who play music at this German type establishment",
      image: "http://media.hiddencityphila.org/wp-content/uploads/2013/11/11201813/Ortliebsbar_5.jpg",
      street:"847 N 3rd St",
      cityZip:"Philadelphia, PA 19123",
      googleMaps:"https://www.google.com/maps/dir//Ortlieb's,+847+N+3rd+St,+Philadelphia,+PA+19123/@39.9634646,-75.1437828,17z/data=!4m16!1m6!3m5!1s0x89c6c8652de0ade1:0xb105cafc7b428e5d!2sOrtlieb's!8m2!3d39.964522!4d-75.1423531!4m8!1m0!1m5!1m1!1s0x89c6c8652de0ade1:0xb105cafc7b428e5d!2m2!1d-75.142353!2d39.964522!3e3",
      hours: "closed Monday, 2am",
      rating:"4.4",
      yelp: "https://www.yelp.com/biz/ortliebs-philadelphia"
    }, 
    {
      name: "Yard's Brewing Company",
      latitude: 39.9634646,
      longtitude: -75.1437828,
      type: "brewery",
      hint1: "This is America we don't use meters, we use ....",
      hint2: "One of the most popular Philly beers, be ready for a brawl after this one",
      image: "https://lh5.googleusercontent.com/p/AF1QipNbfPY-7k5m6Ba2gaFCmZpcTpu3GP-lyatizWiE=w408-h271-k-no",
      street:"500 Spring Garden St",
      cityZip:"Philadelphia, PA 19123",
      googleMaps:"https://www.google.com/maps/place/Yards+Brewing+Company/@39.9607591,-75.1450595,17z/data=!4m5!3m4!1s0x89c6c866915bd66b:0x7ca447b9c996647!8m2!3d39.9609711!4d-75.1469088",
      hours: "11am - 11pm",
      rating:"4.5",
      yelp: "https://www.yelp.com/biz/yards-brewing-company-philadelphia-3"
    }
  ],
    Userlong: "",
    Userlat: "",
    closest: "",
    closestBar: "",
    ready:"false",
    array: ["jersey", "television", "juke box", "beer tap", "shot glass", "shotski", "wine glass", "neon sign"],
    word: "beer"
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



// loadBars1 = () => {
//     API.getBars()
//       .then(res => this.setState({ bars: res.data }))
//       .catch(err => console.log(err));
//     console.log(this.state.bars);
//     // console.log(this.getLocation())
//     this.Loading();
//     //return  this.props.history.push("/map")
//   };
randomWords = () => {
  var choiceIndex = Math.floor(Math.random() * this.state.array.length)
  this.setState({word: this.state.array[choiceIndex]})
  console.log(this.state.word)
  
  };

Loading = () => {
    // HTML5/W3C Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.UserLocation);     
    }      
    // Default to Washington, DC
    else
      console.log("No Geolocation");
      
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
            <Provider store={store}>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/home" render={()=> <Home parentMethod={this.Loading} closestBar={this.state.closestBar} ready={this.state.ready} bars={this.state.bars}/>} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/nolocation" component={NoLocation} />
                <Route exact path="/map" render={()=> <Maps closestBar={this.state.closestBar} Userlong={this.state.Userlong} Userlat={this.state.Userlat}/>}/>
                <Route exact path="/help" render={()=> <ExtraHelp closestBar={this.state.closestBar} />} />
                <Route exact path="/arrived" render={()=> <Arrived closestBar={this.state.closestBar} />} />
                <Route exact path="/bardetails" render={()=> <BarDetails closestBar={this.state.closestBar} />} />
                <Route exact path="/picpage" render={()=> <PicPage parentMethod1={this.randomWords} array={this.state.array} word={this.state.word}/>} />
                <Route exact path="/identified" render={()=> <IdentifiedPic  parentMethod1={this.randomWords} word={this.state.word} />} />
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/nomatch" component={NoMatch} />
                <Route component={Error} />
              </Switch>
            </Provider>
          </div>
        </Router>
      </div>    
    </>
  );
  }
}

export default App;

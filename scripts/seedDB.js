const mongoose = require("mongoose");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/barhop"
);

const db = require("../models");

const barSeed = [
  {
    name: "Misconduct Tavern",
    latitude: 39.948580,
    longtitude: -75.166650,
    type: "Sports Bar",
    hint1: "This bars name is a synonym for mischievous actions or unacceptable behavior",
    hint2: "This bar is located on a street named after a type of grasshopper with exceptional musical talent",
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
  }
];

db.Bar
  .remove({})
  .then(() => db.Bar.collection.insertMany(barSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const mongoose = require("mongoose");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/barhop"
);

const db = require("../models");

const barSeed = [
  {
    name: "Misconduct",
    latitude: 39.948580,
    longtitude: -75.166650,
    type: "sports"
  },
  {
    name: "Prohibition",
    latitude: 39.961460,
    longtitude: -75.159321,
    type: "gastropub"
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

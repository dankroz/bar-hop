const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const cors = require("cors");

const bodyParser = require("body-parser");
const passport = require("passport");

app.use(cors())
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect( db || "mongodb://localhost/barhop")
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// const conn = mongoose.createConnection('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]', options);


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});







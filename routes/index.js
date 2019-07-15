const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var passport = require("passport");


/* GET Google Authentication API. */
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
      console.log("authenticated")
      var token = req.user.token;
      console.log(token)
      res.redirect("http://bar--hop.herokuapp.com");
  }
);

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

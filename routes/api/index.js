const router = require("express").Router();
const barRoutes = require("./bars");
const userRoutes = require("./users")


// Bar routes
router.use("/bars", barRoutes);
// User routes
router.use("/users", userRoutes);


module.exports = router;

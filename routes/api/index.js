const router = require("express").Router();
const barRoutes = require("./bars");

// Book routes
router.use("/bars", barRoutes);
// Auth routes
router.use("/users", userRoutes);

module.exports = router;

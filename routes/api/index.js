const router = require("express").Router();
const barRoutes = require("./bars");

// Book routes
router.use("/bars", barRoutes);

module.exports = router;

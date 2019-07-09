const router = require("express").Router();
const barsController = require("../../controllers/barControllers");

// Matches with "/api/books"
router.route("/")
  .get(barsController.findAll)
  .post(barsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(barsController.findById)
  .put(barsController.update)
  .delete(barsController.remove);

module.exports = router;

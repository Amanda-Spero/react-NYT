const router = require("express").Router();
<<<<<<< HEAD
const articleController = require("../../controllers/articleController");

=======
const booksController = require("../../controllers/articleController");

// Matches with "/api/books"
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

<<<<<<< HEAD
=======
// Matches with "/api/books/:id"
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
<<<<<<< HEAD

=======
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f

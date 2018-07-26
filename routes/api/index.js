const router = require("express").Router();
const articleRoutes = require("./articles");
<<<<<<< HEAD
const nytRoutes = require("./nyt");

router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

module.exports = router;

=======

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f

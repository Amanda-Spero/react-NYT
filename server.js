<<<<<<< HEAD


=======
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
<<<<<<< HEAD
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

=======
app.use(express.static("client/build"));
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
<<<<<<< HEAD
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytarticles"
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactarticlelist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f

// Getting the required packages and dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Creating a port to be used later in the listener
const PORT = process.env.PORT || 3000;

// Create the Express server
const app = express();

// Sets up the morgan logger middleware
// https://www.npmjs.com/package/morgan
// HTTP request logger middleware for node.js
// "dev" logs concise output colored by response status for development use.
// The :status token will be colored green for success codes, red for server error codes,
// yellow for client error codes, cyan for redirection codes,and uncolored for information codes.
app.use(logger("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to handle static files
app.use(express.static("public"));

// Connecting to the "workout" MongoDB database with Mongoose
// "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment."
// "Mongoose supports both promises and callbacks."
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// HTML Routes
app.use(require("./routes/html-routes.js"))
// API Routes
app.use(require("./routes/api-routes.js"))

// Starts the server and has it listening on the respective port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});


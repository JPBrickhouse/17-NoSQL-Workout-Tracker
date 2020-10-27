// Requiring the "path" package dependency
const path = require("path");

// Importing the Router method from Express
const router = require("express").Router()

// Defaulting to the index.html page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Going to the exercise.html page
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Going to the stats.html page
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Exporting all the routes back up to the server
module.exports = router;
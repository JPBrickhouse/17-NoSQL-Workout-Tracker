// Requiring the "path" package dependency
const path = require("path");

// Getting the models
const db = require("../models");

// Exporting all the routes
module.exports = function (app) {

    // Defaulting to the index.html page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Going to the exercise.html page
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Going to the stats.html page
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}
// Getting the models
const db = require("../models");

// Importing the Router method from Express
const router = require("express").Router()

// GET route to GET the last workout
router.get("/api/workouts", (req, res) => {

    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// // PUT route to UPDATE an exercise in the workout
// app.put("/api/workouts/:id", (req, res) => {

// });


// // POST route to CREATE a workout
// app.post("/api/workouts", (req, res) => {

// });


// // GET route to GET workouts in a range
// app.get("/api/workouts/range", (req, res) => {

// });


// Exporting all the routes back up to the server
module.exports = router;
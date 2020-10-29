// ----------------------------------------------------------------
// Getting the models
const db = require("../models");
// ----------------------------------------------------------------
// Importing the Router method from Express
const router = require("express").Router()
// ----------------------------------------------------------------
// GET route to GET the last workout
router.get("/api/workouts", (req, res) => {

    // This syntax gets ALL the workouts! And then the code in
    // public/api.js actually parses it to get the last workout
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// ----------------------------------------------------------------
// PUT route to UPDATE an exercise in the workout
router.put("/api/workouts/:id", (req, res) => {

    // Console logging for record-keeping
    console.log(req.body); // req.body gets the exercises
    console.log(req.params.id); // req.params gets the id

    // This syntax...
    // - filters the Workout by id
    // - uses the $push operator to append a specificied value to an array
    //     (Workouts are arrays of objects, where each object has data for an individual exercise)
    // - has a callback function that returns an error or sends the data
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body
            }
        },
        (error, dbWorkout) => {
            if (error) {
                res.send(error);
            } else {
                res.send(dbWorkout);
            }
        }
    );
});
// ----------------------------------------------------------------
// POST route to CREATE a workout
router.post("/api/workouts", (req, res) => {

    // When the user clicks "New Workout" on the index page, it takes them to the /exercise page
    // On the /exercise page, there is an exercise.js javascript file
    // Immediately upon loading the exercise.js file, the initExercise function runs
    // Within that function, there is an async function/method called API.createWorkout()
    // API.createWorkout makes a post request to the /api/workouts route
    // The syntax below passes an empty object (document) to create in the Workout collection
    // This is because we want to create a new Workout
    // This will then allow the user to add and update exercises IN the workout
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
// ----------------------------------------------------------------
// GET route to GET workouts in a range
router.get("/api/workouts/range", (req, res) => {
    // This syntax gets ALL the workouts! And then the code in
    // public/stats.js actually parses it to display
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// ----------------------------------------------------------------
// Exporting all the routes back up to the server
module.exports = router;
// ----------------------------------------------------------------
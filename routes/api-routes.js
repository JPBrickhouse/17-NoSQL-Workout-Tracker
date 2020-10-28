// Getting the models
const db = require("../models");

// Importing the Router method from Express
const router = require("express").Router()

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
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});


// POST route to CREATE a workout
// router.post("/api/workouts", (req, res) => {

// });


// GET route to GET workouts in a range
// router.get("/api/workouts/range", (req, res) => {

// });


// Exporting all the routes back up to the server
module.exports = router;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defining the Workout Schema
// https://mongoosejs.com/docs/guide.html
// "Everything in Mongoose starts with a Schema.
// Each schema maps to a MongoDB collection and defines
// the shape of the documents within that collection."
const WorkoutSchema = new Schema ({
    day: {
        type: Date
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String,
                trim: true,
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});

// Adding a method to the WorkoutSchema



// Exporting the WorkoutSchema as a model
const Workout = mongoose.model("Workout",WorkoutSchema);
module.exports = Workout;
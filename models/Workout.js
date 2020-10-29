// ----------------------------------------------------------------
// Getting the requiremed package / dependency
const mongoose = require("mongoose");
// ----------------------------------------------------------------
// Running the mongoose.Schema method
const Schema = mongoose.Schema;
// ----------------------------------------------------------------
// Defining the Workout Schema
// https://mongoosejs.com/docs/guide.html
// "Everything in Mongoose starts with a Schema.
// Each schema maps to a MongoDB collection and defines
// the shape of the documents within that collection."
const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
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
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);
// ----------------------------------------------------------------
// Adding a method (function) to the WorkoutSchema that sums up the durations of ALL the exercises in the workout
// https://mongoosejs.com/docs/guide.html
// https://mongoosejs.com/docs/tutorials/virtuals.html
// This method (function) will be a virtual:
// - In Mongoose, a virtual is a property that is not stored in MongoDB.
// - Virtuals are typically used for computed properties on documents.
// - By default, Mongoose does not include virtuals when you convert a document to JSON. 
// - For example, if you pass a document to the Express res.json() function, virtuals will not be included by default.
// - To include virtuals in res.json(), you need to set the toJSON schema option to { virtuals: true }.
WorkoutSchema.virtual("totalDuration").get(function(){
    
    // Initializing a sumTotal, used to store the sumTotal of all the exercise durations
    var sumTotal = 0;

    // - this refers to the entire workout
    // - this.exercises refers to the key of "exercises" within the workout, whose value is an array of objects
    // - using the forEach method on this array of objects goes into each element (object)
    // - inside each element (object), it looks for object.duration, and adds it to sumTotal
    this.exercises.forEach(object => {
        sumTotal += object.duration
    });

    // return the sumTotal
    return sumTotal;
});
// ----------------------------------------------------------------
// Exporting the WorkoutSchema as a model
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
// ----------------------------------------------------------------
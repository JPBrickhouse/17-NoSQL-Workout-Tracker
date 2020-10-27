const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defining the Workout Schema
// https://mongoosejs.com/docs/guide.html
// "Everything in Mongoose starts with a Schema.
// Each schema maps to a MongoDB collection and defines
// the shape of the documents within that collection."
const WorkoutSchema = new Schema ({

});



// Adding a method to the WorkoutSchema



const Workout = mongoose.model("Workout",WorkoutSchema);


module.exports = Workout;
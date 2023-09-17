const mongoose = require("mongoose");
const { Schema } = mongoose;

// Mongoose Schema

const MovieSchema = new Schema({
  title: {
    type: String,
  },
  year: {
    type: String,
  },
  id: {
    type: String,
  },
  Poster: {
    type: String,
  },
});

const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;

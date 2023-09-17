const mongoose = require("mongoose");

// Connection to Monogo DB Database (Local)

const mongoURI =
  "mongodb+srv://iamarpit:1234567890@omdb-api.rrneimc.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;

const express = require("express");
const router = express.Router();
const Movie = require("../models/FavouriteMovie");

// ROUTE 1: Fetch Favourite Movies form the Database
router.get("/fetchfavs", async (req, res) => {
  try {
    const movs = await Movie.find();
    res.json(movs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});

// ROUTE 2:  Add to Favourite in Database
router.post("/favourites", async (req, res) => {
  try {
    const { title, year, id, Poster } = req.body;

    // Checkif movie already added to Favourites
    let mov = await Movie.findOne({ id: req.body.id });
    if (mov) {
      return res.status(400).json({
        error: "Movie already favourited",
      });
    }

    // Add movie to Favourites
    const fav = new Movie({
      title,
      year,
      id,
      Poster,
    });

    const saveFav = await fav.save();
    res.json(saveFav);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});

// ROUTE 3: Remove movie from Favourites

router.delete("/remove/:id", async (req, res) => {
  try {
    // Find the move to be removed
    let movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send("Not Found");
    }

    movie = await Movie.findByIdAndDelete(req.params.id);
    res.json({ Success: "Removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});
module.exports = router;

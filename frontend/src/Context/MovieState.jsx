import { useState } from "react";
import MovieContext from "./MovieContext";

const MovieState = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const initialFav = [];
  const [favMovies, setFavMovies] = useState(initialFav);

  // Fetch Movie from OMDB Api
  const fetchMovie = async (debouncedSearch) => {
    setLoading(true);

    const URL = `http://www.omdbapi.com/?s=${debouncedSearch}&apikey=d5783368&page=${pageNo}`;
    const response = await fetch(URL);
    const resJSON = await response.json();
    if (resJSON.Search) {
      setMovies(resJSON);
      setLoading(false);
    }
  };

  // Fetch Notes
  const fetchFavs = async () => {
    // API Call
    const response = await fetch("http://localhost:5000/api/movies/fetchfavs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setFavMovies(json);
  };

  // Add to Favourite API
  const addFav = async (title, year, id, Poster) => {
    // API Call
    await fetch("http://localhost:5000/api/movies/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, year, id, Poster }),
    });
  };

  // Remove Movie
  const removeFav = async (id) => {
    // API Call
    await fetch(`http://localhost:5000/api/movies/remove/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newFavs = favMovies.filter((fav) => {
      return fav._id !== id;
    });
    setFavMovies(newFavs);
  };

  return (
    <>
      <MovieContext.Provider
        value={{
          movies,
          setMovies,
          fetchMovie,
          loading,
          setLoading,
          pageNo,
          setPageNo,
          addFav,
          favMovies,
          fetchFavs,
          removeFav,
        }}
      >
        {/* eslint-disable-next-line react/prop-types*/}
        {props.children}
      </MovieContext.Provider>
    </>
  );
};

export default MovieState;

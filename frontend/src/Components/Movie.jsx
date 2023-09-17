import { useContext } from "react";
import movieContext from "../Context/MovieContext";
import MovieCard from "./MovieCard";
import heart from "../assets/heart.png";

/* eslint-disable react/prop-types */
const Movie = ({ movie, title, year }) => {
  const context = useContext(movieContext);
  const { addFav } = context;

  const favMovie = {
    title: movie.Title,
    year: movie.Year,
    id: movie.imdbID,
    Poster: movie.Poster,
  };

  const handleClick = () => {
    addFav(favMovie.title, favMovie.year, favMovie.id, favMovie.Poster);
  };

  return (
    <div>
      <MovieCard
        handleClick={handleClick}
        movie={movie}
        title={title}
        year={year}
        btnName={<img src={heart} />}
      />
    </div>
  );
};

export default Movie;

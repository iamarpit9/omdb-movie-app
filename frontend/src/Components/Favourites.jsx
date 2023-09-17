import { useContext, useEffect } from "react";
import movieContext from "../Context/MovieContext";
import MovieCard from "./MovieCard";
import remove from "../assets/remove.png";

const Favourites = () => {
  const context = useContext(movieContext);
  const { favMovies, fetchFavs, removeFav } = context;

  useEffect(() => {
    fetchFavs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favMovies]);

  return (
    <>
      {favMovies.map((fav, index) => (
        <div key={index}>
          <MovieCard
            handleClick={() => removeFav(fav._id)}
            movie={fav}
            title={fav.title}
            year={fav.year}
            btnName={<img src={remove} />}
          />
        </div>
      ))}
    </>
  );
};

export default Favourites;

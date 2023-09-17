import { useContext, useEffect, useState } from "react";
import movieContext from "../Context/MovieContext";
import Movie from "./Movie";
import MovieHeading from "./MovieHeading";
import SearchBox from "./SearchBox";
import useDebounce from "../Hooks/useDebounce";
import Favourites from "./Favourites";
import "../Style/Home.css";
import Loader from "./Loader";

const Home = () => {
  const context = useContext(movieContext);
  const { movies, setMovies, fetchMovie, loading, pageNo, setPageNo } = context;

  const [searchValue, setSearchValue] = useState("movie");

  const debouncedSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
    setMovies([]);

    if (debouncedSearch) {
      fetchMovie(debouncedSearch);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, pageNo]);

  let movieList = [];

  if (movies.Search) {
    movieList = movies.Search;
  }

  // Pagination
  const handlePrevious = () => {
    if (movieList && pageNo !== 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    if (
      movieList &&
      pageNo < Math.ceil(movies.totalResults / 10) &&
      movies.totalResults > 10
    ) {
      setPageNo(pageNo + 1);
    }
  };

  return (
    <div className="home-container">
      <div className="home-heading">
        <MovieHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {loading && <Loader />}
      <div>
        <div className="home-movie">
          {movieList.map((movie, index) => (
            <Movie
              key={index}
              movie={movie}
              title={movie.Title}
              year={movie.Year}
            />
          ))}
        </div>
        <div className="home-btn">
          <button
            disabled={pageNo == 1 ? true : false}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            disabled={
              pageNo == Math.ceil(movies.totalResults / 10) ? true : false
            }
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <div style={{ textAlign: "left" }}>
          <MovieHeading heading="Favourites" />
        </div>

        <div className="home-movie">
          <Favourites />
        </div>
      </div>
    </div>
  );
};

export default Home;

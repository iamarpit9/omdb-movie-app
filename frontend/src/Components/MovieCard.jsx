/* eslint-disable react/prop-types */
import "../Style/MovieCard.css";

const MovieCard = ({ movie, handleClick, btnName, title, year }) => {
  return (
    <>
      <div className="img-container">
        <img className="poster" src={movie.Poster} alt="" />
        <div className="overlay">
          <div className="movie-info">
            <p>
              {" "}
              <span>{title}</span>
            </p>
            <p>{year}</p>
          </div>
          <button onClick={handleClick}>{btnName}</button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

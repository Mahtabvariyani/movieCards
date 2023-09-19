import React from "react";

function MovieCard(props) {
  const { movie, clickToDelete } = props;
  function generateScoreLable(score) {
    if (score > 9) {
      return <span></span>;
    } else if (score < 7) {
      return <span>{score}</span>;
    } else {
      return <span>{score}</span>;
    }
  }

  return (
    <div className="MovieCard">
        <div className="picture"><img src={movie.image} alt="Movie" /></div>
      <h3>{movie.title}</h3>
      <h4>Director:{movie.director}</h4>
      <h6>Rating:{generateScoreLable(movie.IMDBRating)}</h6>
      {movie.hasOscars ? <p>🏆</p> : <p>Greate movie 🎬</p>}

      <button onClick={() => clickToDelete(movie._id) }  className="delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;

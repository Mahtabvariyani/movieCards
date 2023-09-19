import React, { useState } from "react";
import MovieData from "../movie-data.json";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setmovies] = useState(MovieData);
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });
    setmovies(filteredMovies); 
  };

  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };
  return (
    <div className="MovieList">
      <h2>Movie List</h2>
      <button onClick={toggleShowMovies} className="hidebtn">{showMovies ? "Hide" : "Show"}
      </button>
      {
        showMovies && movies.map((movie)=>{
            return (
                <MovieCard 
                key={movie._id}
                movie={movie}
                clickToDelete={deleteMovie}
                
                
                />
            )
        })
      }
    </div>
  );
}

export default MovieList;

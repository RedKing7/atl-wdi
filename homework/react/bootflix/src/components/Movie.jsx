import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (params) => {
  const {movie, api} = params;
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>{movie.Title}</h3>
        <p>
          <strong>Released:</strong> {movie.Release}<br />
          <strong>Directed By:</strong> {movie.Director}<br />
          <em>Genre: {movie.Genre}</em>
        </p>
        <p>{movie.Plot}</p>
        <img src={`http://img.omdbapi.com/?i=${movie.imdbID}&apikey=${api}`} alt={movie.Title}/>
      </div>
    </section>
  );
};

export default Movie;



import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (params) => {
  const {
    title,
    released,
    director,
    genre,
    plot
  } = params;
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title</h3>
        <p>
          <strong>Released:</strong> {title}<br />
          <strong>Directed By:</strong> {director}<br />
          <em>Genre: {genre}</em>
        </p>
        <p>{plot}</p>
      </div>
    </section>
  );
};

export default Movie;



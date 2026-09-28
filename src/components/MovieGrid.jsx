import React from "react";

function MovieGrid({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          
          <div className="movie-poster">
            <img
              src={
                movie.Poster && movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Poster"
              }
              alt={movie.Title}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x450?text=No+Poster";
              }}
            />

            <span className="movie-year">
              {movie.Year}
            </span>
          </div>

          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Type}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
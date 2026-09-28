import React from "react";

function MovieCard({ poster, title, year }) {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img
          src={poster}
          alt={title}
          className="movie-poster"
        />

        <div className="movie-year">
          {year}
        </div>
      </div>

      <div className="movie-info">
        <h3>{title}</h3>

        <div className="movie-meta">
          <span>🎬 Movie</span>
          <span>•</span>
          <span>{year}</span>
        </div>

        <button className="detail-button">
          Lihat Film
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
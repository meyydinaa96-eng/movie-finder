import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie`
      );

      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("Film tidak ditemukan. Coba judul film lain.");
      }
    } catch (err) {
      setMovies([]);
      setError("Terjadi kesalahan saat mengambil data film.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const handleSearch = () => {
    const query = searchQuery.trim();

    if (query === "") {
      setError("Silakan masukkan judul film terlebih dahulu.");
      return;
    }

    fetchMovies(query);
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-badge">
              ✨ Temukan film favoritmu
            </div>

            <h1>
              Temukan Film
              <span> Favoritmu</span>
            </h1>

            <p>
              Cari berbagai macam film dengan mudah.
              Temukan judul, tahun rilis, dan poster film
              favoritmu dalam satu tempat.
            </p>

            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            />

            <div className="hero-info">
              <div>
                <strong>🎬</strong>
                <span>Movie Database</span>
              </div>

              <div>
                <strong>⚡</strong>
                <span>Fast Search</span>
              </div>

              <div>
                <strong>☁️</strong>
                <span>Online API</span>
              </div>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="film-circle circle-one">
              🎬
            </div>

            <div className="film-circle circle-two">
              🍿
            </div>

            <div className="film-circle circle-three">
              ⭐
            </div>

            <div className="hero-card">
              <div className="hero-card-poster">
                🎞️
              </div>

              <div>
                <span>NOW SHOWING</span>
                <h3>MovieSky</h3>
                <p>
                  Find your next favorite movie
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MOVIES */}
        <section className="movies-section" id="movies">
          <div className="section-heading">
            <div>
              <span className="section-label">
                MOVIE COLLECTION
              </span>

              <h2>
                {searchQuery
                  ? `Hasil pencarian "${searchQuery}"`
                  : "Film Pilihan Untukmu"}
              </h2>

              <p>
                Jelajahi koleksi film dan temukan tontonan
                yang menarik untukmu.
              </p>
            </div>

            <div className="movie-count">
              <strong>{movies.length}</strong>
              <span>Film ditemukan</span>
            </div>
          </div>

          {/* LOADING */}
          {loading && (
            <div className="loading-container">
              <div className="loader"></div>

              <h3>Loading...</h3>

              <p>
                Sedang mencari film untuk kamu.
              </p>
            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="error-container">
              <div className="error-icon">
                🎞️
              </div>

              <h3>Oops!</h3>

              <p>{error}</p>

              <button
                onClick={() => fetchMovies("Avengers")}
              >
                Tampilkan Film
              </button>
            </div>
          )}

          {/* MOVIE LIST */}
          {!loading &&
            !error &&
            movies.length > 0 && (
              <MovieGrid movies={movies} />
            )}
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-box">
            <div className="about-icon">
              🎥
            </div>

            <div>
              <span className="section-label">
                ABOUT MOVIESKY
              </span>

              <h2>
                Satu tempat untuk mencari film
              </h2>

              <p>
                MovieSky merupakan aplikasi pencarian
                film sederhana yang dibuat menggunakan
                React JS dan REST API. Aplikasi ini
                menggunakan component, props, state,
                dan useEffect untuk menampilkan data
                film secara dinamis.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            🎬 MovieSky
          </div>

          <p>
            React JS Movie Finder • 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
// =========================
  // OMDb API
  // =========================

  useEffect(() => {

    // Kalau search kosong,
    // tampilkan 15 movie default

    if (!submittedQuery) {

      setMovies(movieData)

      setError("")

      return
    }


    const searchMovies = async () => {

      setLoading(true)

      setError("")


      try {

        const apiKey =
          import.meta.env.VITE_OMDB_API_KEY


        // SEARCH MOVIE

        const searchResponse =
          await fetch(
            `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
              submittedQuery
            )}&type=movie`
          )


        const searchData =
          await searchResponse.json()


        // MOVIE TIDAK DITEMUKAN

        if (searchData.Response === "False") {

          setMovies([])

          setError(
            searchData.Error ||
            "Movie tidak ditemukan."
          )

          return
        }


        // AMBIL MAKSIMAL 8 HASIL

        const searchResults =
          searchData.Search.slice(0, 8)


        // AMBIL DETAIL SETIAP FILM

        const detailedMovies =
          await Promise.all(

            searchResults.map(
              async (movie) => {

                const detailResponse =
                  await fetch(
                    https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}&plot=short
                  )


                const detailData =
                  await detailResponse.json()


                return {
                  id: detailData.imdbID,

                  title: detailData.Title,

                  year: detailData.Year,

                  country:
                    detailData.Country ||
                    "Unknown",

                  genre:
                    detailData.Genre ||
                    "Unknown",

                  poster:
                    detailData.Poster &&
                    detailData.Poster !== "N/A"
                      ? detailData.Poster
                      : "/favicon.svg"
                }

              }
            )

          )


        setMovies(detailedMovies)


        // SCROLL KE MOVIE

        setTimeout(() => {

          movieSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })

        }, 100)

      } catch (err) {

        console.error(err)

        setMovies([])

        setError(
          "Gagal mengambil data dari OMDb."
        )

      } finally {

        setLoading(false)

      }

    }


    searchMovies()

  }, [submittedQuery])


  // =========================
  // SHOW ALL MOVIES
  // =========================

  const showAllMovies = () => {

    setSearchQuery("")

    setSubmittedQuery("")

    setMovies(movieData)

    setError("")


    setTimeout(() => {

      movieSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

    }, 100)

  }



export default App;
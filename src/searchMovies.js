import React, { useState } from "react";
import MovieCard from "./MovieCard";
import './index';
import MovieDetail from "./MovieDetail";

export default function SearchMovies(props) {
  // actual state,  function that updates the state
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const moviedetail = props.movieDetail;

  const searchMovies = async e => {
    e.preventDefault();
    const url = `https://www.omdbapi.com/?s=${query}&apikey=913f1186`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.Search);
      setMovies(data.Search);
    } catch (err) {
      console.error(err);
    }
  };

  

  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <header className="headerdiv">
          <div className="titlediv">
          <h1 className="headertitle">Movie Finder</h1> 
          </div>
          <div className="searchdiv">
              <form className="form" onSubmit={searchMovies}>
                  <input
                      className="input"
                      type="text"
                      placeholder="Search Movie"
                      name="search"
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                  />
                  <button className="button" type="submit">
                      <i class="fa fa-search"></i>
                  </button>
              </form>
          </div>
      </header>
      <div className="bodydiv">    
          <div className="card-list">
            {movies
              .filter(movie => movie.Poster)
              .map(movie => (
              <MovieCard movie={movie} key="{movie.imdbID}" />
            ))}
          </div>
          <footer className="footerdiv">
            <h3 className="footertitle">Created by Jitendra Joshi</h3> 
          </footer>
      </div>
    </div>
  );
}

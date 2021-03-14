import React, { useState } from "react";
import './index.css';
import MovieDetail from './MovieDetail';
import SearchMovies from './searchMovies';

export default function MovieCard(props) {
  const [detailres, setdetailres] = useState([]);
  const { movie } = props;
  var moviedatail = "";

  const moviedetail = async e => {
    e.preventDefault();
    const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=913f1186`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);
      setdetailres(data);
      //console.log(detailres);
    } catch (err) {
      console.error(err);
    }
  };

  if(detailres.Title !== " "){
    // moviedatail = ;
  }

  return (
    <>
    {/* {console.log(detailres)} */}
      <div className="card">
        <img
          className="card--image"
          src={ movie.Poster }
          onClick = {moviedetail}
        />
        <div className="card--content">
          <h3 className="card--title">{movie.Title}({movie.Year})</h3>
        </div>
      </div>
      {(detailres != "")?
      <div>
        {/* <MovieDetail movieDetail={detailres}/> */}
      </div>
      :''}
    </>
  );
}

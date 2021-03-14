import React from "react";
import './index.css';

export default function MovieDetail(props) {
    return(
        <div className="mdetailcontainer">
            {/* <div className="mdetailimgdiv">
                <img className="mdetailimg" src={props.movieDetail.Poster}/>
            </div> */}
            <div className="mdetaildesc">
                <h3>
                    {props.movieDetail.Title} ({props.movieDetail.Year})
                </h3>
                <p>
                    IMDB Rating: {props.movieDetail.imdbRating}
                </p>
                <p>
                    Runtime: {props.movieDetail.Runtime}
                </p>
                <p>
                    Genre: {props.movieDetail.Genre}
                </p>
                <p>
                    Director:   {props.movieDetail.Director}
                </p>
                <p>
                    Country: {props.movieDetail.Country}
                </p>
                <p>
                    {props.movieDetail.Plot}
                </p>
            </div>
        </div>
    )
}
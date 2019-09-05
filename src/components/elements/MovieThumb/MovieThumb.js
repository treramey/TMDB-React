import React from "react";
import { Link } from "react-router-dom";
import "./MovieThumb.css";
import PropTypes from 'prop-types';

const MovieThumb = props => {
  return (
    <div className="rmdb-moviethumb">
      {props.clickable ? (
        <Link
          to={{
            pathname: `/${props.movieId}`,
            movieName: `${props.movieName}`
          }}
        >
          <img src={props.image} alt="Moviethumb" />
        </Link>
      ) : (
        <img src={props.image} alt="Moviethumb" />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string
}

export default MovieThumb;

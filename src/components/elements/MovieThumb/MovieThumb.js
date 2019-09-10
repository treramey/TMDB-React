import React from "react";
import { Link } from "react-router-dom";
import "./MovieThumb.css";
import PropTypes from "prop-types";

const MovieThumb = ({ image, movieId, movieName, clickable }) => {
  return (
    <div className="rmdb-moviethumb">
      {clickable ? (
        <Link
          to={{
            pathname: `/${movieId}`,
            movieName: `${movieName}`
          }}
        >
          <img src={image} alt="Moviethumb" />
        </Link>
      ) : (
        <img src={image} alt="Moviethumb" />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string
};

export default MovieThumb;

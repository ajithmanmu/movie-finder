import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        return (
            <div className="movie-finder__movie_details">
                <div><label>Name:</label><label>Batman</label></div>
                <div><label>Year:</label><label>1983</label></div>
                <div><label>Rating:</label><label>4.9/5</label></div>
            </div>
        );
    }
}

export default MovieDetails;
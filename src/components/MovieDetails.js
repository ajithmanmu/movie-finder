import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        return (
            <div className="movie-finder__movie_details">
                <div><label>Showing results for: </label><label>Latest Trends</label></div>
                <div>
                <label>SORT BY: </label>
                    <select>
                        <option>Year</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
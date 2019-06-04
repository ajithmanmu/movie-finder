import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import MovieLists from './MovieLists';


class Results extends Component {
    render() {
        return (
            <div className="movie-finder__movie_results">
                <MovieDetails/>
                <MovieLists />
            </div>
        );
    }
}

export default Results;

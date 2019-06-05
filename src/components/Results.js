import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import MovieLists from './MovieLists';


class Results extends Component {
    render() {
        const { movies } = this.props;
        return (
            <div className="movie-finder__movie_results">
                <MovieDetails/>
                <MovieLists movies={movies} />
            </div>
        );
    }
}

export default Results;

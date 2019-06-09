import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import MovieLists from './MovieLists';
import MovieThumbNail from './MovieThumbNail';

class Results extends Component {
    render() {
        const { movies, handleMovieClipClick, selectedMovie, closeThumbNail } = this.props;
        return (
            <div className="movie-finder__movie_results">
                <MovieDetails/>
                {
                    selectedMovie ? 
                    <MovieThumbNail selectedMovie={selectedMovie} closeThumbNail={closeThumbNail} />
                    :
                    <MovieLists movies={movies} handleMovieClipClick={handleMovieClipClick} /> 
                }
                
            </div>
        );
    }
}

export default Results;

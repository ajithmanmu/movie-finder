import React, { Component } from 'react';

import MovieDetails from './MovieDetails';
import MovieLists from './MovieLists';
import MovieThumbNail from './MovieThumbNail';

class Results extends Component {
    render() {
        const { movies, handleMovieClipClick, selectedMovie, sortMovies, modal, getMoviePlayList, searchText } = this.props;
        return (
            <div className="movie-finder__movie_results">
                <MovieDetails sortMovies={sortMovies} searchText={searchText}/>
                {
                    selectedMovie ? 
                    <MovieThumbNail selectedMovie={selectedMovie} modal={modal} handleMovieClipClick={handleMovieClipClick} getMoviePlayList={getMoviePlayList} />
                    :
                    <MovieLists movies={movies} handleMovieClipClick={handleMovieClipClick} /> 
                }
                
            </div>
        );
    }
}

export default Results;

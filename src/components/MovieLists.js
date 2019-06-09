import React, { Component } from 'react';
import MovieClip from './MovieClip';

// const movies = [1,2,3,4];
class MovieLists extends Component {
    render() {
        const { movies, handleMovieClipClick } = this.props;
        return (
            <div className="movie-finder__list">
            {
                movies.map((movie)=><MovieClip movie={movie} handleMovieClipClick={handleMovieClipClick} />)
            }  
            </div>
        );
    }
}

export default MovieLists;
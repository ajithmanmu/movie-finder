import React, { Component } from 'react';
import { generatePosterPath } from '../common/util';

class MovieThumbNail extends Component {
    render() {
        const {selectedMovie, title, closeThumbNail} = this.props;
        const posterPath = generatePosterPath('w185', selectedMovie.poster_path);
        return (
            <div className="movie-finder__movie_thumbnail">
                <div style={{display: 'flex',justifyContent: 'space-between', marginBottom: '20px'}}>
                    <label>{selectedMovie.title} -&&- {selectedMovie.popularity}</label>
                    <div className="thumbnail_close_icon" onClick={closeThumbNail}>X</div>
                </div>
                <div style={{display: 'flex',justifyContent: 'space-between', margin: '20px'}}>
                    
                    <img src={posterPath} alt={title}/>
                    <label>{selectedMovie.overview}</label>
                </div>
            </div>
        );
    }
}

export default MovieThumbNail;
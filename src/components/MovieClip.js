import React, { Component } from 'react';
import { generatePosterPath } from '../common/util';

class MovieClip extends Component {
    render() {
        const { movie } = this.props;
        const { title, release_date, vote_average, poster_path} = movie;
        const posterPath = generatePosterPath('w154', poster_path);
        const imageClipStyle = {
            backgroundImage: `url(${posterPath})`,
            width: '200px',
            height: '100px',
            margin: '20px'
        }
        return (
            <div className="movie-finder__movieclip" style={imageClipStyle}>
                <label>{title}</label>
            </div>
        );
    }
}


export default MovieClip;
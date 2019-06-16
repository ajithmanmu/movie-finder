import React, { Component } from 'react';
import { generatePosterPath } from '../common/util';
import { Card, CardImg, CardHeader } from 'reactstrap';

class MovieClip extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        const {handleMovieClipClick, movie} = this.props;
        handleMovieClipClick(movie);
    };
    render() {
        const { movie } = this.props;
        const { title, release_date, vote_average, poster_path, id} = movie;
        const posterPath = generatePosterPath('w154', poster_path);
        const imageClipStyle = {
            backgroundImage: `url(${posterPath})`,
        }
        return (
            <div className="movie-finder__movieclip"  onClick={this.handleClick}>
                <Card>
                    <CardHeader>{title}</CardHeader>
                    <CardImg  src={posterPath}></CardImg>
                </Card>
            </div>
        );
    }
}


export default MovieClip;
import React, { Component } from 'react';

class MovieDetails extends Component {
    constructor(props){
        super(props);
        this.onSelectChange = this.onSelectChange.bind(this);
    }
    onSelectChange(evt){
        console.log('evt', evt.target.value);
        this.props.sortMovies(evt.target.value);
    }
    render() {
        return (
            <div className="movie-finder__movie_details">
                <div><label>Showing results for: </label><label>Latest Trends</label></div>
                <div>
                <label>SORT BY: </label>
                    <select onChange={(evt)=>this.onSelectChange(evt)}>
                        <option>Year</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
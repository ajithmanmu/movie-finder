import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="movie-finder__searchbar">
                <label>Search</label>
                <input type="text" value="" />
            </div>
        );
    }
}

export default SearchBar;
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.doSearch = this.doSearch.bind(this);
    }
    handleChange(e){
        this.setState({
            searchText: e.target.value
        })
    }
    doSearch(){
        this.props.search(this.state.searchText);
    }
    render() {
        return (
            <div className="movie-finder__searchbar">
                <input type="text" value={this.state.searchText} onChange={(e)=>this.handleChange(e)} />
                <button onClick={this.doSearch}>Search</button>
            </div>
        );
    }
}

export default SearchBar;
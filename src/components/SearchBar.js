import React, { Component } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';

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
            <InputGroup>
                <Input type="text" placeholder="search.." value={this.state.searchText} onChange={(e)=>this.handleChange(e)} />
                <Button color="primary" onClick={this.doSearch}>Search</Button>
            </InputGroup>
            </div>
        );
    }
}

export default SearchBar;
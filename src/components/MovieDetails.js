import React, { Component } from 'react';
import { Alert, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MovieDetails extends Component {
    constructor(props){
        super(props);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
          };
    }
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    
    onSelectChange(evt){
        this.props.sortMovies(evt.target.innerText);
    }
    render() {
        return (
            <div className="movie-finder__movie_details">
                <Alert color="primary" style={{marginRight: '10px'}}>Showing Results for : Latest Trends</Alert>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                        <DropdownToggle caret>Sort</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.onSelectChange}>Year</DropdownItem>
                            <DropdownItem onClick={this.onSelectChange}>rating</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
            </div>
        );
    }
}

export default MovieDetails;
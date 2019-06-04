import React, {Component} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import '../styles/MovieFinder.css';

class Home extends Component {
    render(){
        return(
            <div className="movie-finder__home">
                <Header/>
                <SearchBar />
                <Results/>
            </div>
        )
    }
};

export default Home;
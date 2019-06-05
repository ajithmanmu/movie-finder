import React, {Component} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import { getMovies } from '../common/api';
import '../styles/MovieFinder.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
        }
    }
    async componentDidMount(){
        const data = await getMovies();
        const { results: movies } = data;
        // console.log('movies', movies);
        this.setState({
            movies
        })
    }
    render(){
        const { movies } = this.state;
        return(
            <div className="movie-finder__home">
                <Header/>
                <SearchBar />
                <Results movies={movies}/>
            </div>
        )
    }
};

export default Home;
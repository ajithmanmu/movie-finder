import React, {Component} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import { getMovies, searchMovies } from '../common/api';
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
        this.setState({
            movies
        })
    }
    search = async (searchText) => {
        const data = await searchMovies(searchText);
        const { results: movies } = data;
        this.setState({
            movies
        })
    };
    render(){
        const { movies } = this.state;
        return(
            <div className="movie-finder__home">
                <Header/>
                <SearchBar search={this.search} />
                <Results movies={movies}/>
            </div>
        )
    }
};

export default Home;
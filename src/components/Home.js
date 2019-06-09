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
            selectedMovie: null,
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
    handleMovieClipClick = (movie) => {
        this.setState ({
            selectedMovie: movie
        });
    };
    closeThumbNail = () => {
        this.setState ({
            selectedMovie: null
        });
    }

    render(){
        const { movies, selectedMovie } = this.state;
        return(
            <div className="movie-finder__home">
                <Header/>
                <SearchBar search={this.search} />
                <Results movies={movies} handleMovieClipClick={this.handleMovieClipClick} selectedMovie={selectedMovie} closeThumbNail={this.closeThumbNail}/>
            </div>
        )
    }
};

export default Home;
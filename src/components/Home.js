import React, {Component} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import { getMovies, searchMovies, getYoutubeList, getYoutubeVideo } from '../common/api';
import '../styles/MovieFinder.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            searchText: 'Latest Trends',
            selectedMovie: null,
            modal: false
        }
    }
    async componentDidMount(){
        const data = await getMovies();
        const { results: movies } = data;
        // movies.splice(15);
        this.setState({
            movies: movies,
        })
    }
    search = async (searchText) => {
        const data = await searchMovies(searchText);
        const { results: movies } = data;
        this.setState({
            movies,
            searchText
        })
    };
    handleMovieClipClick = (movie) => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            selectedMovie: !prevState.modal ? movie : null
          }));
    };
    sortMovies = (sort) => {
        const { movies } = this.state;
        const sortedMovies = sort === 'Year' ? movies.sort((m1, m2)=>new Date(m1.release_date) - new Date(m2.release_date))
            :
            movies.sort((m1, m2)=> m1.popularity - m2.popularity);
        this.setState ({
            movies: sortedMovies
        });
    };
    getMoviePlayList = async () => {
        const { selectedMovie } = this.state;
        const {items} = await getYoutubeList(selectedMovie.title);
        const {id:{videoId}} = items[0];
        // const res = await getYoutubeVideo(videoId);
        this.setState ({
            selectedMovie: {
                ...selectedMovie,
                playVideo: videoId,
            }
        });
    };

    render(){
        const { movies, selectedMovie, modal, searchText } = this.state;
        return(
            <div className="movie-finder__home">
                <Header/>
                <SearchBar search={this.search} />
                <Results 
                    movies={movies} 
                    searchText={searchText}
                    modal={modal} 
                    handleMovieClipClick={this.handleMovieClipClick} 
                    selectedMovie={selectedMovie} 
                    sortMovies={this.sortMovies}
                    getMoviePlayList={this.getMoviePlayList}
                />
            </div>
        )
    }
};

export default Home;
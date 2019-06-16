import React, { Component } from 'react';
import {getYear} from 'date-fns';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import ReactPlayer from 'react-player'
import { generatePosterPath } from '../common/util';

class MovieThumbNail extends Component {
    render() {
        const {selectedMovie, title, modal, handleMovieClipClick, getMoviePlayList} = this.props;
        const posterPath = generatePosterPath('w185', selectedMovie.poster_path);
        const { playVideo } = selectedMovie;
        return (
            <Modal isOpen={modal} >
                <ModalHeader toggle={handleMovieClipClick}>{selectedMovie.title} ({getYear(selectedMovie.release_date)})</ModalHeader>
                <ModalBody style={{display: 'flex',flexDirection: 'column', marginBottom: '20px'}}>
                    <div style={{display: 'flex',justifyContent: 'space-between', margin: '15px'}}>
                        <img src={posterPath} alt={title}/>
                        <label style={{fontSize: '14px', margin: '20px'}}>{selectedMovie.overview}</label>
                    </div>
                    <div>
                    {
                        playVideo ?
                        <ReactPlayer width="auto" url={`https://www.youtube.com/watch?v=${playVideo}`} />
                        :
                        <Button color="info" size="lg" block onClick={getMoviePlayList}>Watch Now!!!</Button>
                    }
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default MovieThumbNail;
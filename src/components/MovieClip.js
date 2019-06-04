import React, { Component } from 'react';

const imageClipStyle = {
    backgroundImage: 'url(https://dz7u9q3vpd4eo.cloudfront.net/wp-content/legacy/posts/e03c2f9c-cbd8-4097-a0fd-5780e5c7ba58.jpg)',
    width: '200px',
    height: '100px',
    margin: '20px'
}

class MovieClip extends Component {
    render() {
        return (
            <div className="movie-finder__movieclip" style={imageClipStyle}>
                <label>Batman Returns</label>
            </div>
        );
    }
}


export default MovieClip;
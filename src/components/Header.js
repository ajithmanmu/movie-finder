import React, { Component } from 'react';
import { Badge } from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <div  className="movie-finder__header">
                <h1><Badge color="primary">MOVIE FINDER</Badge></h1>
            </div>
        );
    }
}

export default Header;
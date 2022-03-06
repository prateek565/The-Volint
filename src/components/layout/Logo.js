import { Link } from '@material-ui/core';
import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (

            <Link className="home-link" exact to={'/'} title="Hireco" rel="home">
                <img id="logo-img" height="42" width="170" className="img-fluid auto_size" src="images/logo-img.svg" alt="logo-img"/>
             </Link>
        );
    }
}

export default Logo;
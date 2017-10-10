import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './not-found.css';


class NotFound extends Component {

    render() {
        return (
            <div>
                Not Found Page
            </div>
        );
    }
}


export default withRouter(NotFound);


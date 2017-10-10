import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/home';

import './home.css';


class Home extends Component {

    render() {
        return (
            <div>
                Home Page
            </div>
        );
    }
}

const oConnect = connect(state => ({
        state: state
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(Home);

export default withRouter(oConnect);


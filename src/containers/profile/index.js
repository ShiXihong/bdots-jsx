import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/profile';

import './profile.css';


class Profile extends Component {
    render() {
        return (
            <div>
                Profile Page
            </div>
        );
    }
}

const oConnect = connect(state => ({
        state: state
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(Profile);

export default withRouter(oConnect);


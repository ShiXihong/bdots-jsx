import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import LoginForm from '../../components/form/login';

class Login extends Component {

    render() {
        return (
            <LoginForm redirectTo="/"/>
        );
    }
}

export default withRouter(Login);
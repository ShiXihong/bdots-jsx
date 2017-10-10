import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import RegisterForm from '../../components/form/register';

class Register extends Component {

    render() {
        return (
            <RegisterForm />
        );
    }
}

export default withRouter(Register);
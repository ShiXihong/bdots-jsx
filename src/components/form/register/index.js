import React, {Component} from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {injectIntl, FormattedMessage} from 'react-intl';
import {Field, reduxForm} from 'redux-form';
import {RaisedButton} from 'material-ui';
import {TextField, Checkbox} from 'redux-form-material-ui';
import OtherLogin from '../../other-login';
import * as actions from '../../../actions/register';

import './register.css';


class RegisterForm extends Component {

    submit = data => {
        this.props.actions.submitData(data)
    };

    render() {
        const {intl, state, handleSubmit} = this.props;

        return (
            <div className="form-base">
                <form onSubmit={handleSubmit(this.submit.bind(this))}>
                    <div className="form-line">
                        {intl.formatMessage({id: "WelcomeBank"})}
                    </div>
                    <Field
                        name="account"
                        component={TextField}
                        hintText={intl.formatMessage({id: "PleaseEnterAccount"})}
                        floatingLabelText={intl.formatMessage({id: "Account"})}
                        fullWidth={true}
                    />
                    <Field
                        name="password"
                        component={TextField}
                        type="password"
                        hintText={intl.formatMessage({id: "PleaseEnterPassword"})}
                        floatingLabelText={intl.formatMessage({id: "Password"})}
                        fullWidth={true}
                    />
                    <Field
                        name="confirmPassword"
                        component={TextField}
                        type="password"
                        hintText={intl.formatMessage({id: "PleaseEnterConfirmPassword"})}
                        floatingLabelText={intl.formatMessage({id: "ConfirmPassword"})}
                        fullWidth={true}
                    />
                    <div>
                        <RaisedButton type="submit" primary={true} fullWidth={true}
                                      style={{marginTop: '15px'}}
                                      label={intl.formatMessage({id: "Register"})}/>
                    </div>
                    <div className="form-link">
                        <Field name="agreeToTerms"
                               component={Checkbox}
                               label="勾选表示同意注册协议"
                               style={{width: '50%', fontSize: '14px'}}
                               inputStyle={{marginRight:'0'}}/>
                        <Link to="/login"><FormattedMessage id="ToLogin"/></Link>
                    </div>
                    <OtherLogin/>
                </form>
            </div>
        );
    };
}


const validate = (values) => {
    const errors = {};

    if (!values.account) {
        errors.account = <FormattedMessage id="AccountCantBlank"/>;
    }

    if (!values.password) {
        errors.password = <FormattedMessage id="PasswordCantBlank"/>;
    }

    if(values.password !== values.confirmPassword){
        errors.confirmPassword = <FormattedMessage id="ConfirmPasswordError"/>;
    }

    return errors;
};


const oIntl = injectIntl(RegisterForm);

const oConnect = connect(state => ({
        state: state.register
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(oIntl);

const oForm = reduxForm({form: 'registerForm', validate, initialValues: {agreeToTerms: true}})(oConnect);

export default withRouter(oForm);
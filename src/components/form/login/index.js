import React, {Component} from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {injectIntl, FormattedMessage} from 'react-intl';
import {Field, reduxForm} from 'redux-form';
import {RaisedButton} from 'material-ui';
import {TextField,} from 'redux-form-material-ui';
import config from '../../../config';
import OtherLogin from '../../other-login';
import * as actions from '../../../actions/login';

import './login.css';

class LoginForm extends Component {

    submit = data => {
        this.props.actions.submitData(data)
    };

    render() {
        const {intl, state, handleSubmit, redirectTo} = this.props;
        const loginStatus = state.status.toLowerCase();


        return (
            loginStatus === 'success'
                ? <Redirect to={redirectTo}/>
                : <div className="form-base">
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
                        {
                            state.verificationSVG
                                ? <div className="verification">
                                    <Field
                                        name="verificationCode"
                                        component={TextField}
                                        hintText={intl.formatMessage({id: "PleaseEnterVerificationCode"})}
                                        floatingLabelText={intl.formatMessage({id: "VerificationCode"})}
                                        fullWidth={true}
                                    />
                                    <div className="verification_code" dangerouslySetInnerHTML={{__html: state.verificationSVG}}></div>
                                </div>
                                : null
                        }
                        <div>
                            <RaisedButton type="submit" primary={true} fullWidth={true}
                                          style={{marginTop: '15px'}}
                                          disabled={state.loading}
                                          label={state.loading
                                              ? intl.formatMessage({id: "Logging"})
                                              : intl.formatMessage({id: "LoginBtn"})}/>
                        </div>
                        {
                            loginStatus === 'fail' ? <p className='error-info'>{state.message}</p> : ""
                        }
                        <div className="form-link">
                            <Link to="/register"><FormattedMessage id="ToRegister"/></Link>
                            <Link to="/forget-password"><FormattedMessage id="ForgetPassword"/></Link>
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

    if (!values.verificationCode) {
        errors.verificationCode = <FormattedMessage id="VerificationCodeCantBlank"/>;
    }

    return errors;
};


const oIntl = injectIntl(LoginForm);

const oConnect = connect(state => ({
        state: state.login
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(oIntl);

const oForm = reduxForm({form: 'loginForm', validate})(oConnect);

export default withRouter(oForm);
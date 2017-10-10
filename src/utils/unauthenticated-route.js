import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Utils from './utils';


export default ({ component: C, props: cProps, ...rest }) => {
    const redirect = Utils.queryString('redirect');
    return (
        <Route {...rest} render={props => (
            cProps.userToken === null
                ? <C {...props} {...cProps} />
                : <Redirect to={(redirect === '' || redirect === null)
                ? '/'
                : redirect} />
        )}/>
    );
}
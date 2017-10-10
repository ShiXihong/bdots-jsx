import React from 'react';
import {Route, Switch} from 'react-router-dom';
import asyncComponent from '../utils/async-component';
import AppliedRoute from '../utils/applied-route';
import AuthenticatedRoute from '../utils/authenticated-route';
import UnauthenticatedRoute from '../utils/unauthenticated-route';

const Home = asyncComponent(() => import('../containers/home'));
const Login = asyncComponent(() => import('../containers/login'));
const Register = asyncComponent(() => import('../containers/register'));
const Profile = asyncComponent(() => import('../containers/profile'));
const Test = asyncComponent(() => import('../containers/test'));
const NotFound = asyncComponent(() => import('../containers/not-found'));

export default ({childProps}) => (
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>
        <UnauthenticatedRoute path="/test" exact component={Test} props={childProps}/>
        <UnauthenticatedRoute path="/login" exact component={Login} props={childProps}/>
        <UnauthenticatedRoute path="/register" exact component={Register} props={childProps}/>
        <AuthenticatedRoute path="/Profile/:id" exact component={Profile} props={childProps}/>
        <Route component={NotFound}/>
    </Switch>
);
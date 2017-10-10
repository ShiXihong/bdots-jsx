import { fork } from 'redux-saga/effects';

import login from './login';
import register from './register';
import text from './test';

const sagas = [
    fork(login),
    fork(register),
    fork(text)
];

export default function* rootSaga () {
    yield sagas
}
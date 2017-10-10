import { call, put, fork ,takeEvery } from 'redux-saga/effects';
import * as loginActions from '../actions/login';
import * as headerActions from '../actions/header';
import * as api from '../services/api';

function* submitData(action) {
    try {
        const userInfo = yield call(api.login, action.payload);
        yield put(headerActions.bindUserInfo(userInfo));
        yield put(loginActions.afterLogin(userInfo));
    } catch (e) {
    }
}

export default function* testSaga() {
    yield fork(takeEvery, String(loginActions.submitData), submitData)
}

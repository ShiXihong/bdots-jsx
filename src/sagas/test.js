import { call, put, fork ,takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/test';
import api from '../services/test';

function* getData() {
    try {
        const data = yield call(api.getData);
        yield put(actions.bindData(data));
    } catch (e) {
        yield put(actions.error(e));
    }
}

export default function* testSaga() {
    yield fork(takeEvery, String(actions.getData), getData)
}

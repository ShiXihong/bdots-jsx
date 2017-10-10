import {call, put, fork, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/register';
import * as api from '../services/api';

function* submitData(action) {
    try {
        const registerInfo = yield call(api.register, Object.assign({}, action.payload, {
            phone: '13611111111',
            email: 'xx@xx.com'
        }));
        yield put(actions.afterRegister(registerInfo));
    } catch (e) {
    }
}

export default function* testSaga() {
    yield fork(takeEvery, String(actions.submitData), submitData)
}

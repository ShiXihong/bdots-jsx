import {handleActions} from 'redux-actions';
import * as actions from '../actions/test';

const initialState = {
    data: {},
    loading: false,
    error: null
};

export default handleActions({
    [actions.getData](state) {
        console.log("get data");
        console.log("state:");
        console.log(state);
        return Object.assign({}, state, {loading: true});
    },
    [actions.bindData](state, action) {
        console.log("bind data");
        console.log("state:");
        console.log(state);
        console.log("action:");
        console.log(action);
        return Object.assign({}, state, {data: action.payload});
    },
    [actions.error](state, action) {
        console.log(state);
        return Object.assign({}, state, {error: action.error});
    }

}, initialState);
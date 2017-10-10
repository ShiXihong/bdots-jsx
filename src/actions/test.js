import { createAction } from 'redux-actions'

const getData = createAction("TEST/GETDATA");

const bindData = createAction("TEST/BINDDATA");

const error = createAction("TEST/ERROR");

export {
    getData,
    bindData,
    error
}
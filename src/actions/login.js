import { createAction } from 'redux-actions'

const submitData = createAction("LOGIN/SUBMIT");

const afterLogin = createAction("LOGIN/AFTER_LOGIN");

export {
    submitData,
    afterLogin
}
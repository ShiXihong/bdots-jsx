import { createAction } from 'redux-actions'

const submitData = createAction("REGISTER/SUBMIT");

const afterRegister = createAction("REGISTER/AFTER_REGISTER");

export {
    submitData,
    afterRegister
}
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import reducers from '../reducers';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, createLogger()];
    return {
        ...createStore(reducers, initialState, applyMiddleware(...middlewares)),
        runSaga: sagaMiddleware.run
    }
}

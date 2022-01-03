import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/root_Reducer';
import rootSaga from '../saga/root_Saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

function configeStore() {
    return createStore(rootReducer, applyMiddleware(sagaMiddleware))
}

const store = configeStore();
sagaMiddleware.run(rootSaga);

export default store;
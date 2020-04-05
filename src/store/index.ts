import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import createStore from './createStore';
import {rootReducer} from './modules/rootReducer';
import rootSagas from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSagas);

export {store};

import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import createStore from './createStore';
import {rootReducer} from './modules/rootReducer';
import rootSagas from './modules/rootSagas';
import {Store} from 'redux';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middlewares = [sagaMiddleware, thunk];

const store: Store<any> = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSagas);

export {store};

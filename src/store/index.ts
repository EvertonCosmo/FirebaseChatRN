import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {persistStore, Persistor} from 'redux-persist';
import {Store} from 'redux';
import createStore from './createStore';
import {rootReducer} from './modules/rootReducer';
import rootSagas from './modules/rootSagas';

import persistReducers from './persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middlewares = [sagaMiddleware, thunk];

const store: Store<any> = createStore(
  persistReducers(rootReducer),
  middlewares,
);
const persistor: Persistor = persistStore(store);
sagaMiddleware.run(rootSagas);

export {store, persistor};

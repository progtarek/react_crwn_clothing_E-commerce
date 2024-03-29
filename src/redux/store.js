import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
const middleWares = [];

const store = createStore(rootReducer, applyMiddleware(...middleWares));
const persister = persistStore(store);
export { store, persister };

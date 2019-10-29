import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import reducers from './reducers';
import { AppState } from "../types";
import { AllGameActions } from "./reducers/games";

const sagaMiddleware = createSagaMiddleware();

type AllKnownActions = AllGameActions;

export type AppStore = Store<AppState, AllKnownActions>

const store: AppStore = createStore<AppState, AllKnownActions, any, any>(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

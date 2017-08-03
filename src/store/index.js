import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import rootSaga from '../sagas/root';
import configureFirebase from '../lib/firebase';
import board from '../components/CreateTeam/createTeam.reducer';
import userInfo from '../components/login/signin-reducer';
import checkins from '../components/checkin/checkIns.reducer';

const rootReducer = combineReducers({ board, userInfo, checkins });

const sagas = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagas),
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f,
);

export default initialState => {
  const store = createStore(rootReducer, initialState, enhancer);
  sagas.run(rootSaga);
  configureFirebase();
  return store;
};

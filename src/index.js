import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import loginReducer from './store/reducers/login';
import jobListReducers from './store/reducers/jobList';
import {watchSaga} from './store/sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	login: loginReducer,
	jobList: jobListReducers
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchSaga);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
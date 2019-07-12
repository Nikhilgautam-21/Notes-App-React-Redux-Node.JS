import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import  createSagaMiddleware from 'redux-saga'
import rootReducer from './Reducers/rootReducer';
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, compose(middlewares))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

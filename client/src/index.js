import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './store/reducers';
import rootSaga from './store/sagas/index';

import io from 'socket.io-client';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);

const socket = io('https://secure-bastion-35148.herokuapp.com/', { transport : ['websocket'] });

// then run the saga
sagaMiddleware.run(rootSaga);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// render the application
ReactDOM.render(
	<Provider store={store}>
		<App socket={socket}/>
	</Provider>
	, document.getElementById('root'));

// Stop listening to state updates
// unsubscribe()
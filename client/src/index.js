import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import mySaga from './sagas/lake-saga';

import io from 'socket.io-client';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);

const socket = io('http://localhost:8000', { transport : ['websocket'] });

// then run the saga
sagaMiddleware.run(mySaga);

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// Stop listening to state updates
// unsubscribe()